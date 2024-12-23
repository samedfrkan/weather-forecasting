// Form gönderimi için event listener ekle
document.getElementById("weather-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

  // Kullanıcıdan alınan verileri al
  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;

  // Tahmin sonucu göstermek için yapay bir örnek
  const resultDiv = document.getElementById("result");

  // Şehirler için detaylı hava durumu tahmini
  let weatherForecast;
  switch (city) {
    case "Çorlu":
      weatherForecast = `
        Şehir: Çorlu
        Tarih: ${date}
        Sıcaklık: 28°C
        Basınç: 1015 hPa
        Nem: %40
        Rüzgar Hızı: 15 km/s
      `;
      break;
    case "Erzurum":
      weatherForecast = `
        Şehir: Erzurum
        Tarih: ${date}
        Sıcaklık: -5°C
        Basınç: 1020 hPa
        Nem: %30
        Rüzgar Hızı: 10 km/s
      `;
      break;
    case "Trabzon":
      weatherForecast = `
        Şehir: Trabzon
        Tarih: ${date}
        Sıcaklık: 18°C
        Basınç: 1012 hPa
        Nem: %70
        Rüzgar Hızı: 20 km/s
      `;
      break;
    default:
      weatherForecast = "Hava durumu bilgisi bulunamadı.";
  }

  // Sonucu kullanıcıya göster
  resultDiv.textContent = weatherForecast;
});
