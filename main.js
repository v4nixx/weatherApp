const apiKey = "4f73e3f0fa47aaf09cae53cecfb0afcb";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = document.getElementsByTagName("input");
const tempDom = document.getElementById("tempValue");
const searchBtn = document.getElementById("searchBtn");
const cityDom = document.getElementById("cityNameTemp");
const icon = document.getElementById("icon");
const humidityDom = document.getElementById("humidity");
const windSpeedDom = document.getElementById("windspeed");
async function getWeatherData() {
  console.log("start");
  const respone = await fetch(`${url}${city[0].value}&appid=${apiKey}`);
  const data = await respone.json();
  console.log("end fetching");
  tempDom.textContent = `${(data.main.temp - 273.15).toFixed(2)}°C`;
  cityDom.textContent = data.name;
  humidityDom.textContent = `${data.main.humidity}%`;
  windSpeedDom.textContent = `${data.wind.speed} km/h`;

  if (data.weather[0].id >= 700 && data.weather[0].id <= 799) {
    console.log("fog");
    icon.src = "assets/fog.png";
  } else {
    icon.src = `assets/${data.weather[0].main.toLowerCase()}.png`;
  }
  icon.onerror = () => (icon.src = "assets/clouds.png");
}
searchBtn.addEventListener("click", () => getWeatherData());
