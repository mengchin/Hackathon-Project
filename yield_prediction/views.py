import pandas as pd
from django.shortcuts import render
from django.views.generic.base import TemplateView
import pandas as pd
import sklearn
import os
import numpy as np
import joblib
import random
import pickle

import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import model_selection
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.metrics import classification_report, accuracy_score, mean_squared_error, r2_score



#model = pickle.load(open('./yield_prediction/Yield_Predictor.pkl','rb'))

class PredictAppView(TemplateView):
    template_name = 'yield.html'


# Create your views here.
def predict(request):
    States = request.POST['locationDropdown']
    Crops = request.POST['cropDropdown']
    Area = float(request.POST['Area'])
    Season = request.POST['seasonDropdown']
    Annual_Rainfall = float(request.POST['Annual_Rainfall'])
    #Average_Rainfall = request.POST['Average_Rainfall']
    Fertilizer = float(request.POST['Fertilizer'])
    Pesticide = float(request.POST['Pesticide'])

    #Load the pkl in based on the selected states & crops
    name_prefix = States+'_'+Crops
    model = pickle.load(open('./yield_prediction/saved_models/model_'+name_prefix+'.pkl','rb'))
    
    # Run the prediction
    #feature_val= map(float,[ Season, Area, Annual_Rainfall, Fertilizer, Pesticide])
    feature_val= [ Season, Area, Annual_Rainfall, Fertilizer, Pesticide]
    feature_name=  ['season','area','annual_rainfall', 'fertilizer', 'pesticide']
    input_params= dict(zip(feature_name, feature_val))
    input_df = pd.DataFrame([input_params])
    result = np.round(model.predict(input_df)[0],3)
    #----Backend Training Test-------------
    #df_raw = pd.read_csv('./yield_prediction/filtered_crop_data.csv').dropna()
    #df= df_raw[df_raw['Crop_'+Crops] == True].iloc[:, :6]
    #X= df[['Area', 'Annual_Rainfall', 'Fertilizer', 'Pesticide','Average_Rainfall']] 
    #Y= df[['Yield']]  
    #x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.15, random_state=5)
    #model = RandomForestRegressor(n_estimators=11)
    #model.fit(x_train, y_train)
#
    #def predict_yield(model,input_params):
    #    # Convert input parameters to DataFrame
    #    input_df = pd.DataFrame([input_params])
#
    #    # Make prediction
    #    yield_prediction = model.predict(input_df)[0]
    #    return yield_prediction
#
    #feature_val= map(float,[Area, Annual_Rainfall, Fertilizer, Pesticide,Average_Rainfall])
    #feature_name=  ['Area', 'Annual_Rainfall', 'Fertilizer', 'Pesticide','Average_Rainfall']
    #input_params= dict(zip(feature_name, feature_val))
    #yield_predicted = predict_yield(model, input_params)
    #result = np.round(yield_predicted,3)
    
    
    return render(request, 'yield.html', {'Area':Area, 'Annual_Rainfall': Annual_Rainfall, 'Season': Season, 'Fertilizer':Fertilizer,'Pesticide': Pesticide, 'Crops':Crops,'Result': result})