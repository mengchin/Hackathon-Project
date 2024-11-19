import requests
import pandas as pd
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.metrics import classification_report, accuracy_score, mean_squared_error, r2_score, confusion_matrix
import lightgbm as lgb
from sklearn.preprocessing import LabelEncoder, StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from fuzzywuzzy import process
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.tree import BaseDecisionTree
import joblib


model = joblib.load('C:/Users/USER/Desktop/hackathon/my_project/yield_prediction/YieldPredictor.joblib')

def predict_new_input(model, input_data):
    # Ensure the input data has the same columns as the training data
    input_df = pd.DataFrame(input_data)

    # One-hot encode the input data
    input_df = pd.get_dummies(input_df, columns=['Crop', 'State'])

    # Align input data columns with training data columns
    missing_cols = set(X.columns) - set(input_df.columns)
    for col in missing_cols:
        input_df[col] = 0
    input_df = input_df[X.columns]

    # Predict using the model
    prediction = model.predict(input_df)
    return prediction[0]


new_input_data = {
        'Area': float(input("Enter Average Rainfall: ")),
        'Annual_Rainfall': float(input("Enter value for Annual Rainfall: ")),
        'Fertilizer': float(input("Enter value for Fertilizer Quantity: ")),
        'Pesticide': float(input("Enter Pesticide Quantity: ")),
        'Average_Rainfall': float(input("Enter Average Rainfall for Cropping Duration: ")),
        'Crop': input("Enter Crop: "),
        'State': input("Enter State: "),
    }

# Make prediction with the trained model
predicted_yield = predict_new_input(model, new_input_data)
print(f"Predicted Yield: {predicted_yield}") 