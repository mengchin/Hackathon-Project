import pandas as pd
from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.

class RecommendAppView(TemplateView):
    template_name = 'crop.html'

import numpy as np
import sklearn
import pickle
import os

# importing model
model = pickle.load(open('./crop_recommendation/model.pkl','rb'))
best_model = pickle.load(open('./crop_recommendation/best_model.pkl','rb'))
label_encoder= pickle.load(open('./crop_recommendation/label_encoder.pkl','rb'))
sc = pickle.load(open('./crop_recommendation/standscaler.pkl','rb'))
ms = pickle.load(open('./crop_recommendation/minmaxscaler.pkl','rb'))


#Set some threshold values to prevent wrong prediction
def check_input(input_params):
    if 0 <= input_params['N'] <= 150:
        check_N = True
    else :
        check_N = False   
    if 20 <= input_params['P'] <= 100 :
        check = True
    else :
        check = False 
    if 40 <= input_params['K'] <= 120 :
        check = True
    else :
        check = False        
    if 4 <= input_params['ph'] <= 10 :
       check =True
    else :
        check = False  
    if 0 <= input_params['humidity'] <= 100 :
        check =True 
    else :
        check = False  
    if 20 <= input_params['temp'] <= 35:
        check =True 
    else :
        check = False 
    if 0 < input_params['rainfall'] <= 150 :
        check =True
    else :
        check = False
    return check
        

def predict_best_crop(model, label_encoder, input_params):
    """Predict the best crop to plant based on input parameters.

    Parameters:
    model (LGBMClassifier): Trained LightGBM model.
    label_encoder (LabelEncoder): Fitted label encoder.
    input_params (dict): Dictionary of input parameters.

    Returns:
    str: The best crop to plant."""

    # Convert input parameters to DataFrame
    input_df = pd.DataFrame([input_params])

    # Make prediction
    prediction = model.predict(input_df)

    # Decode the prediction
    best_crop = label_encoder.inverse_transform(prediction)[0]
    return best_crop




#def predict(request):
#    N = request.POST['Nitrogen']
#    P = request.POST['Phosporus']
#    K = request.POST['Potassium']
#    temp = request.POST['Temperature']
#    humidity = request.POST['Humidity']
#    ph = request.POST['Ph']
#    rainfall = request.POST['Rainfall']
#
#    feature_list = [N, P, K, temp, humidity, ph, rainfall]
#    single_pred = np.array(feature_list).reshape(1, -1)
#
#    scaled_features = ms.transform(single_pred)
#    final_features = sc.transform(scaled_features)
#    prediction = model.predict(final_features)
#
#    crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
#                 8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
#                 14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
#                 19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}
#
#    if prediction[0] in crop_dict:
#        crop = crop_dict[prediction[0]]
#        result = "{}".format(crop)
#    else:
#        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
#
#    return render(request, 'crop_recommendation.html',{'Rainfall':rainfall, 'Temperature':temp, 'Nitrogen':N, 'Phosporus':P,'Humidity': humidity, 'PHValue':ph, 'Potassium':K, 'Result':result})

   
def predict(request):
    N = request.POST['Nitrogen']
    P = request.POST['Phosporus']
    K = request.POST['Potassium']
    temp = request.POST['Temperature']
    humidity = request.POST['Humidity']
    ph = request.POST['Ph']
    rainfall = request.POST['Rainfall']
    feature_val= map(float,[N,P, K, temp, humidity, ph, rainfall])
    feature_name=  ['N', 'P', 'K', 'temp', 'humidity', 'ph', 'rainfall']
    input_params= dict(zip(feature_name, feature_val))
    #Check input value before prediction
    check = check_input(input_params)
    if check == True:
        input_params= input_params
        best_crop = predict_best_crop(best_model, label_encoder, input_params)
        result = best_crop
    else:
        result= 'The input values are not reasonable, please enter new values.'

    return render(request, 'crop.html',{'Rainfall':rainfall, 'Temperature':temp, 'Nitrogen':N, 'Phosporus':P,'Humidity': humidity, 'PHValue':ph, 'Potassium':K, 'Result':result})