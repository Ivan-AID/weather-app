const loadingSpinner = document.querySelector("#loading-spinner");

const cityName = document.querySelector("#cityName");
const weatherIcon = document.querySelector("#weatherIcon");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const errorMessage = document.querySelector("#errorMessage");
const weatherResult = document.querySelector("#weatherResult"); 

export function displayWeather(data) {
    errorMessage.classList.add("d-none");
    weatherResult.classList.remove("d-none");

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    condition.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

export function showError(message) {
    weatherResult.classList.add("d-none");
    errorMessage.classList.remove("d-none");
    errorMessage.textContent = message;
}

export function loaderSpinner(isloading) {
  loadingSpinner.style.display = isloading ? "block" : "none";
}

