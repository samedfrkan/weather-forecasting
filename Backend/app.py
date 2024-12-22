from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        city = data.get('city')
        date = data.get('date')

        if not city or not date:
            return jsonify({"error": "City and date are required"}), 400

        # Örnek tahmin sonuçları
        predictions = {
            "temperature": 22.5,  # Tahmini sıcaklık (°C)
            "wind_speed": 15.2,   # Tahmini rüzgar hızı (km/h)
            "humidity": 65,       # Tahmini nem (%)
            "pressure": 1013.2    # Tahmini basınç (hPa)
        }

        
        return jsonify({"city": city, "date": date, "predictions": predictions})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
