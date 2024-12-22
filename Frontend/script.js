document.getElementById('weather-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const date = document.getElementById('date').value;

  try {
    
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city, date }),
    });

    if (!response.ok) throw new Error("Tahmin alınırken hata oluştu!");

    const data = await response.json();
    const predictions = data.predictions;

    
    document.getElementById('temperature').textContent = predictions.temperature;
    document.getElementById('wind-speed').textContent = predictions.wind_speed;
    document.getElementById('humidity').textContent = predictions.humidity;
    document.getElementById('pressure').textContent = predictions.pressure;

    document.getElementById('results').classList.remove('hidden');
  } catch (error) {
    alert("Bir hata oluştu: " + error.message);
  }
});
