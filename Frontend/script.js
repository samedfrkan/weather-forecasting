Promise.all([
  fetch('average_humidity.json').then(res => res.json()),
  fetch('average_pressure.json').then(res => res.json()),
  fetch('average_weather.json').then(res => res.json()),
  fetch('average_wind_speed.json').then(res => res.json()),
  fetch('weather_forecast.json').then(res => res.json())
])
  .then(([humidityData, pressureData, temperatureData, windSpeedData, hourlyData]) => {
    const dateSelector = document.getElementById('date');
    const hourlyDataContainer = document.getElementById('hourly-data');
    const currentTemp = document.getElementById('current-temp');

    // Günlük ortalama bilgileri için 
    const humidityElement = document.getElementById('humidity').querySelector('.content-detail p:last-child');
    const pressureElement = document.getElementById('pressure').querySelector('.content-detail p:last-child');
    const windSpeedElement = document.getElementById('wind-speed').querySelector('.content-detail p:last-child');
    const temperatureElement = document.getElementById('temperature').querySelector('.content-detail p:last-child');

    // Tarihe göre hava durumunu güncelle
    function updateWeather(selectedDate) {
      hourlyDataContainer.innerHTML = ''; 

      // Saatlik sıcaklık verileri
      const dailyHourlyData = hourlyData[selectedDate];
      if (dailyHourlyData) {
        dailyHourlyData.forEach(record => {
          const hourDiv = document.createElement('div');
          hourDiv.classList.add('grid-item-right');
          hourDiv.innerHTML = `
            ${record.HOUR}
            <p class="day-temp">${record.SICKURU.toFixed(1)}°C</p>
          `;
          hourlyDataContainer.appendChild(hourDiv);
        });
      } else {
        hourlyDataContainer.innerHTML = '<p>Veri bulunamadı.</p>';
      }

      // Ortalama sıcaklık
      const dailyTemperatureData = temperatureData[selectedDate];
      if (dailyTemperatureData) {
        currentTemp.textContent = `${dailyTemperatureData.toFixed(1)}°C`;
      } else {
        currentTemp.textContent = '--C';
      }

      // Ortalama değerleri güncelle
      humidityElement.textContent = humidityData[selectedDate] ? `%${humidityData[selectedDate]}` : '--';
      pressureElement.textContent = pressureData[selectedDate] ? `${pressureData[selectedDate]} hPa` : '--';
      windSpeedElement.textContent = windSpeedData[selectedDate] ? `${windSpeedData[selectedDate]} km/s` : '--';
      temperatureElement.textContent = dailyTemperatureData ? `${dailyTemperatureData.toFixed(1)}°C` : '--';
    }


    updateWeather(dateSelector.value);

    // Tarih değiştirildiğinde hava durumu güncelle
    dateSelector.addEventListener('change', (e) => {
      updateWeather(e.target.value);
    });
  })
  .catch(error => console.error('Veriler yüklenirken hata oluştu:', error));
