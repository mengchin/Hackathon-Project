from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import TemplateView
from django.views.generic import View
from .models import ChatMessage,ChatQueryMessage
from django.utils import timezone
import os
import random
import json
import torch
import torch.nn as nn
import sys
import numpy as np
import nltk
# nltk.download('punkt')
from nltk.stem.porter import PorterStemmer
#stemmer = PorterStemmer()

#def tokenize(sentence):
#    """
#    split sentence into array of words/tokens
#    a token can be a word or punctuation character, or number
#    """
#    return nltk.word_tokenize(sentence)


#def stem(word):
#   """
#    stemming = find the root form of the word
#    examples:
#    words = ["organize", "organizes", "organizing"]
#    words = [stem(w) for w in words]
#    -> ["organ", "organ", "organ"]
#    """
#    return stemmer.stem(word.lower())


#def bag_of_words(tokenized_sentence, words):
#    """
#    return bag of words array:
#    1 for each known word that exists in the sentence, 0 otherwise
#    example:
#    sentence = ["hello", "how", "are", "you"]
#    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
#    bog   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
#    """
#    # stem each word
#    sentence_words = [stem(word) for word in tokenized_sentence]
#    # initialize bag with 0 for each word
#    bag = np.zeros(len(words), dtype=np.float32)
#    for idx, w in enumerate(words):
#        if w in sentence_words: 
#            bag[idx] = 1
#
#    return bag

#class NeuralNet(nn.Module):
#    def __init__(self, input_size, hidden_size, num_classes):
#        super(NeuralNet, self).__init__()
#        self.l1 = nn.Linear(input_size, hidden_size) 
#        self.l2 = nn.Linear(hidden_size, hidden_size) 
#        self.l3 = nn.Linear(hidden_size, num_classes)
#        self.relu = nn.ReLU()
#    
#    def forward(self, x):
#        out = self.l1(x)
#        out = self.relu(out)
#        out = self.l2(out)
#        out = self.relu(out)
#        out = self.l3(out)
#        # no activation and no softmax at the end
#        return out
#
#device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

#cwd = os.getcwd()


#json_file = cwd+'/chatbot/intents.json'
#FILE = cwd+'/chatbot/data.pth'
#
#with open(json_file , 'r') as json_data:
#    intents = json.load(json_data)
#

#data = torch.load(FILE)
#
#input_size = data["input_size"]
#hidden_size = data["hidden_size"]
#output_size = data["output_size"]
#all_words = data['all_words']
#tags = data['tags']
#model_state = data["model_state"]
#
#model = NeuralNet(input_size, hidden_size, output_size).to(device)
#model.load_state_dict(model_state)
#model.eval()
#bot_name = "Chatbot"
#
#
## Ask Chatbot
#def ask_chatbot(message):
#    sentence = tokenize(message)
#    X = bag_of_words(sentence, all_words)
#    X = X.reshape(1, X.shape[0])
#    X = torch.from_numpy(X).to(device)
#
#    output = model(X)
#    _, predicted = torch.max(output, dim=1)
#
#    tag = tags[predicted.item()]
#
#    probs = torch.softmax(output, dim=1)
#    prob = probs[0][predicted.item()]
#    if prob.item() > 0.75:
#        for intent in intents['intents']:
#            if tag == intent["tag"]:
#                 answer = random.choice(intent['responses'])
#    else:
#        answer= "I do not understand..."
#    return answer


# Create your views here.
#def chatbot_home(request):
#    chats = ChatMessage.objects.all()#

#    if request.method == 'POST':
#        message = request.POST.get('message')
#        response = ask_chatbot(message)
#        chat = ChatMessage(message=message, response=response, created_at=timezone.now())
#        chat.save()
#        print (chat)
#        return JsonResponse({'message': message, 'response': response})
#    return render(request, 'chatbot.html',{'chats':chats})



#-------------------------------Huw's Ollama Model-----------------------
from langchain_community.embeddings.ollama import OllamaEmbeddings
from langchain_aws.embeddings import BedrockEmbeddings  # Ensure correct import path
import logging

def get_embedding_function():
    embeddings = BedrockEmbeddings(
        credentials_profile_name="default",
        region_name="eu-west-2",
        model_id="amazon.titan-embed-text-v2:0"  # Correct parameter
    )
    return embeddings


from langchain_chroma import Chroma
from langchain.prompts import ChatPromptTemplate
from langchain_community.llms.ollama import Ollama
from colorama import init, Fore, Style



# Initialize colorama
init(autoreset=True)

CHROMA_PATH = "chroma"
PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context: {question}
"""

def query_rag(query_text: str):
    # Prepare the DB.
    embedding_function = get_embedding_function()
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)

    # Search the DB.
    results = db.similarity_search_with_score(query_text, k=5)

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _ in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=query_text)
    model = Ollama(model="mistral")
    response_text = model.invoke(prompt)

    sources = [doc.metadata.get("id", None) for doc, _ in results]
    formatted_response = f"{Fore.RED}Response: {response_text}\nSources: {sources}{Style.RESET_ALL}"
    #print(formatted_response)
    return response_text


#----Update the model----
def chatbot_home(request):
    chats = ChatQueryMessage.objects.all()
    if request.method == 'POST':
        message = request.POST.get('message')
        response = query_rag(message)
        chat = ChatQueryMessage(message=message, response=response, created_at=timezone.now())
        chat.save()
    if request.method == 'POST':
        message = request.POST.get('message')
        if message == 'exit':
            response = 'Thanks for visiting. See you next time!'
        else: 
            response = query_rag(message)
            chat = ChatMessage(message=message, response=response, created_at=timezone.now())
            chat.save()
        return JsonResponse({'message': message, 'response': response})
    return render(request, 'chatbot.html',{'chats':chats})




