from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__, template_folder='templates')

# Load model
model = joblib.load('ensemble_model.pkl')

# Define routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = [
        data['GENDER'],
        data['AGE'],
        data['SMOKING'],
        data['YELLOW_FINGERS'],
        data['ANXIETY'],
        data['PEER_PRESSURE'],
        data['CHRONIC_DISEASE'],
        data['FATIGUE'],
        data['ALLERGY'],
        data['WHEEZING'],
        data['ALCOHOL_CONSUMING'],
        data['COUGHING'],
        data['SHORTNESS_OF_BREATH'],
        data['SWALLOWING_DIFFICULTY'],
        data['CHEST_PAIN']
    ]
    
    # Convert features to numpy array for prediction
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)
    
    result = 'positive' if prediction[0] == 1 else 'negative'
    
    return jsonify({'prediction': result})

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=False)
