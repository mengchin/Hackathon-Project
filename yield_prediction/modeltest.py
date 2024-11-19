import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import model_selection
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.metrics import classification_report, accuracy_score, mean_squared_error, r2_score

#df_raw = pd.read_csv('filtered_crop_data.csv')
#df_crop= df_raw[df_raw['Crop_banana'] == True]
#df = df_crop.iloc[:, :6].dropna()
#
#
#X= df[['Area', 'Annual_Rainfall', 'Fertilizer', 'Pesticide','Average_Rainfall']] 
#Y= df[['Yield']]  
#
#
#x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.15, random_state=5)
#model = RandomForestRegressor(n_estimators=100)
#model.fit(x_train, y_train)
#rf_predict = model.predict(x_test)
##print('xtest:',x_test)
##print(rf_predict)
##print(model.score(x_test,y_test))
#r1 = r2_score(y_test, rf_predict)
##print("R2 score : ", r1)
#
#
#input_params = {
#      'Area':1500,
#      'Annual_Rainfall':1000, 
#      'Fertilizer':20000,
#      'Pesticide':500,
#      'Average_Rainfall':2000
#    }
#new_x = pd.DataFrame([input_params])
#y_predict = model.predict(new_x) [0]
#print(y_predict)


df_cy = pd.read_csv('./crop_yield.csv')
#cropname = df_cy[['Crop']].drop_duplicates().values
df = df_cy[['State', 'Crop']]
#dict =  df.groupby('State')['Crop'].apply(list).to_dict()
crop_all = df.groupby('State')['Crop'].apply(list).reset_index()
# Remove duplicates from lists in the 'Values' column
crop_all['Crop'] = crop_all['Crop'].apply(lambda x: list(dict.fromkeys(x)))

dict = crop_all.set_index('State')['Crop'].to_dict()
print(dict)

def dict_to_string(dictionary):
    return str(dictionary)

with open('readme.txt', 'w') as f:
    f.write(dict_to_string(dict))