# Lung Cancer Prediction Project
## Overview
- This project aims to predict the likelihood of lung cancer using a machine learning ensemble approach based on various risk factors. 
- The project leverages a web interface built with Flask to allow users to input health data and receive predictions.
- Several machine learning models, including Random Forest, Gradient Boosting, Logistic Regression, and Support Vector Machine, are evaluated for accuracy.

## Key Features
- Web Application: A Flask-based application that provides a user interface to input health data and receive predictions.
- Ensemble Model: The project uses an ensemble model for predictions, loaded from a pre-trained ensemble_model.pkl file.
- Data Handling: The input data includes features such as age, smoking status, anxiety, chest pain, and more, which are processed and used for prediction.
- Model Evaluation: Multiple machine learning models are trained and evaluated using performance metrics like accuracy, F1 score, precision, and recall.
- Class Imbalance Handling: The dataset is resampled using upsampling techniques to address class imbalances.

## Dataset
The dataset used for this project contains various health features and a target variable indicating lung cancer diagnosis. The key features include:

-- GENDER, AGE, SMOKING, YELLOW_FINGERS, ANXIETY, PEER_PRESSURE, CHRONIC_DISEASE, FATIGUE, ALLERGY, WHEEZING, ALCOHOL_CONSUMING, COUGHING, SHORTNESS_OF_BREATH, SWALLOWING_DIFFICULTY, CHEST_PAIN.

## Models Evaluated
The following machine learning models were trained and evaluated on the dataset:

- Random Forest
- Gradient Boosting
- Logistic Regression
- Support Vector Machine
Results are visualized and compared across these models based on accuracy, F1 score, precision, recall, and confusion matrices.
