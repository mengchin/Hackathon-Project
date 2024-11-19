import numpy as np
import pandas as pd
import sklearn
import pickle
import os

# importing model
best_model = pickle.load(open('./best_model.pkl','rb'))
label_encoder= pickle.load(open('./label_encoder.pkl','rb'))



def predict_best_crop(model, label_encoder, input_params):
    """Predict the best crop to plant based on input parameters.

    Parameters:
    model (LGBMClassifier): Trained LightGBM model.
    label_encoder (LabelEncoder): Fitted label encoder.
    input_params (dict): Dictionary of input parameters.

    Returns:
    str: The best crop to plant."""
    print(input_params)
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

        if 0 < input_params['rainfall'] <= 1500 :
            check =True
        else :
            check = False
        
        if check == False:
            input_params = input_params
        else:
            print('Please input reasonable value for recommendation')
        
    

    # Convert input parameters to DataFrame
    input_df = pd.DataFrame([input_params])

    # Make prediction
    prediction = model.predict(input_df)

    # Decode the prediction
    best_crop = label_encoder.inverse_transform(prediction)[0]

    return best_crop


feature_val= [100, 130, 30, 25, 40, 800, 200]
feature_name=  ['N', 'P', 'K', 'temp', 'humidity', 'ph', 'rainfall']
input_params= dict(zip(feature_name, feature_val))
best_crop = predict_best_crop(best_model, label_encoder, input_params)

print(best_crop)
