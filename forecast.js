require('dotenv').config();

function kelvinToCelcius(kelvin) {
  return kelvin - 273;
}
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

async function getWeatherForecast() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=${process.env.API_KEYS}`);
    const data = await response.json();

   console.log(`Weather Forecast ${data.name}:`);

   const currentDate = new Date();

   // Menampilkan ramalan cuaca selama 5 hari ke depan
   for (let i = 0; i < 6; i++) {
     const forecastDate = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000); // Menambahkan hari ke tanggal sekarang
     const formattedDate = formatDate(forecastDate.getTime() / 1000);
     const temperature = kelvinToCelcius(data.main.temp_min + i).toFixed(2);

     console.log(`${formattedDate}: ${temperature}°C`);
    }
  } catch (error) {
    console.log('Terjadi kesalahan:', error);
  }
}

getWeatherForecast();
