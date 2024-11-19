import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error

import os
import pickle
import re  # Import re for regular expressions

# Load the dataset
df = pd.read_csv('./crop_yield.csv')

# Clean column names
df.columns = df.columns.str.strip().str.lower()

# Drop the 'year' column if it exists
if 'crop_year' in df.columns:
    df = df.drop(['crop_year','production'], axis=1)
else:
    print("'year' column not found in DataFrame.")


df['season'] = df['season'].str.strip()

# Ensure 'state' and 'crop' columns are of type string
df['state'] = df['state'].astype(str)
df['crop'] = df['crop'].astype(str)

# Create a new column combining state and crop
df['state_crop'] = df['state'] + '_' + df['crop']

# Get a list of unique state-crop combinations
state_crop_combinations = df['state_crop'].unique()

# Initialize dictionaries to store models and results
state_crop_models = {}
state_crop_results = {}

# Initialize a list to store evaluation metrics
metrics_list = []

# Preprocessing pipelines
numeric_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('encoder', OneHotEncoder(handle_unknown='ignore'))
])

# Create a directory to save models if it doesn't exist
model_dir = 'saved_models'
if not os.path.exists(model_dir):
    os.makedirs(model_dir)

# Loop through each state-crop combination and build a model
for combination in state_crop_combinations:
    print(f"\nProcessing combination: {combination}")
    # Subset data for the current combination
    df_combination = df[df['state_crop'] == combination]

    # Check if there's enough data
    if len(df_combination) < 20:
        print(f"Not enough data to train model for combination: {combination} (samples: {len(df_combination)})")
        continue

    # Separate features and target
    X_combination = df_combination.drop(['yield', 'state', 'crop', 'state_crop'], axis=1)
    y_combination = df_combination['yield']

    # Identify numeric and categorical features
    numeric_features_combination = X_combination.select_dtypes(include=['int64', 'float64']).columns.tolist()
    categorical_features_combination = X_combination.select_dtypes(include=['object']).columns.tolist()

    # Define preprocessing steps for the combination data
    preprocessor_combination = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features_combination),
            ('cat', categorical_transformer, categorical_features_combination)
        ]
    )

    # Define the model pipeline for the combination
    model_combination = Pipeline(steps=[
        ('preprocessor', preprocessor_combination),
        ('regressor', RandomForestRegressor(random_state=42))
    ])

    # Split data into training and testing sets
    X_train_combination, X_test_combination, y_train_combination, y_test_combination = train_test_split(
        X_combination, y_combination, test_size=0.2, random_state=42)

    # Check if training and testing sets have sufficient data
    if len(X_train_combination) < 10 or len(X_test_combination) < 5:
        print(f"Not enough data after splitting for combination: {combination}")
        continue

    # Train the model
    model_combination.fit(X_train_combination, y_train_combination)

    # Predict on test set
    y_pred_combination = model_combination.predict(X_test_combination)

    # Compute evaluation metrics
    mae = mean_absolute_error(y_test_combination, y_pred_combination)
    mse = mean_squared_error(y_test_combination, y_pred_combination)
    rmse = np.sqrt(mse)

    # Store metrics
    metrics_list.append({
        'Combination': combination,
        'Samples': len(df_combination),
        'MAE': mae,
        'RMSE': rmse
    })

    print(f'Combination: {combination}, RMSE: {rmse:.2f}, MAE: {mae:.2f}')

    # Store the model and results
    state_crop_models[combination] = model_combination
    state_crop_results[combination] = {
        'mae': mae,
        'rmse': rmse,
        'y_test': y_test_combination,
        'y_pred': y_pred_combination
    }

    # **Sanitize the combination string for filename**
    sanitized_combination = re.sub(r'[\\/*?:"<>|]', "_", combination)

    # Save the model to disk
    model_filename = f"model_{sanitized_combination}.pkl"
    model_filepath = os.path.join(model_dir, model_filename)
    with open(model_filepath, 'wb') as file:
        pickle.dump(model_combination, file)
    print(f"Model for combination {combination} saved as {model_filepath}")

    # Plot Actual vs. Predicted for the combination
    plt.figure(figsize=(8, 6))
    plt.scatter(y_test_combination, y_pred_combination, alpha=0.7)
    plt.plot([y_test_combination.min(), y_test_combination.max()],
             [y_test_combination.min(), y_test_combination.max()],
             'r--', lw=2)
    plt.xlabel('Actual Yield')
    plt.ylabel('Predicted Yield')
    plt.title(f'Actual vs. Predicted Yield for {combination}\nRMSE: {rmse:.2f}, MAE: {mae:.2f}')
    plt.tight_layout()
    #plt.show()

# Create a DataFrame from the metrics list
metrics_df = pd.DataFrame(metrics_list)

# Sort the DataFrame by RMSE for better readability
metrics_df = metrics_df.sort_values(by='RMSE')

# Display the metrics table
print("\nEvaluation Metrics for Each State-Crop Combination:")
print(metrics_df.to_string(index=False))

# Optional: Save the metrics to a CSV file
metrics_df.to_csv('state_crop_metrics.csv', index=False)
print("\nMetrics table saved to 'state_crop_metrics.csv'.")

# Plotting RMSE for each combination
plt.figure(figsize=(12, 8))
sns.barplot(x='Combination', y='RMSE', data=metrics_df)
plt.xticks(rotation=90)
plt.xlabel('State-Crop Combination')
plt.ylabel('RMSE')
plt.title('RMSE of Models for Each State-Crop Combination')
plt.tight_layout()
#plt.show()

# Plotting MAE for each combination
plt.figure(figsize=(12, 8))
sns.barplot(x='Combination', y='MAE', data=metrics_df)
plt.xticks(rotation=90)
plt.xlabel('State-Crop Combination')
plt.ylabel('MAE')
plt.title('MAE of Models for Each State-Crop Combination')
plt.tight_layout()
#plt.show()
