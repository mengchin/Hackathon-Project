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

model = pickle.load(open('./saved_models/model_Andhra Pradesh_Arhar_Tur.pkl','rb'))

input_params = {
    'season':'wholeyear',
    'area':  20000,
    'annual_rainfall':2000,
    'fertilizer':1100000,
    'pesticide': 1100
    }
new_x = pd.DataFrame([input_params])
y_predn = model.predict(new_x)
print (y_predn)