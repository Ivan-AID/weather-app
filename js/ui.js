const cityName = document.querySelector("cityName");
const weatherIcon = document.querySelector("#weatherIcon");
const temperature = document.querySelector("#temperatrure");
const condition = document.querySelector("#condition");
const country = document.querySelector("#country");
const windSpeed = document.querySelector("#windSpeed");

export const displayWeather = (data) => {
  cityName.textContent = data.name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].cityName}.png`;
  temperature.textContent = `${data.main.temp} °C`;
  condition.textContent = data.weather[0].description;
  country.textContent = data.sys.country;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

export function displayError(message) {
  errorMessage.textContent = message;
}
