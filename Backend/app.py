from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    city = data.get('city')
    date = data.get('date')
    
    # Şehir bazlı tahmin
    if city == 'corlu':
        prediction = {
            "temperature": 22.5,
            "wind_speed": 5.2,
            "humidity": 65,
            "pressure": 1012
        }
    elif city == 'erzurum':
        prediction = {
            "temperature": 5.3,
            "wind_speed": 3.1,
            "humidity": 72,
            "pressure": 1024
        }
    elif city == 'trabzon':
        prediction = {
            "temperature": 18.7,
            "wind_speed": 4.5,
            "humidity": 80,
            "pressure": 1018
        }
    else:
        return jsonify({"error": "Geçersiz şehir!"}), 400

    # Tahmin sonuçları
    return jsonify({"predictions": prediction})

if __name__ == '__main__':
    app.run(debug=True)
