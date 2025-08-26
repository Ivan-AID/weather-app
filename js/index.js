
import { fetchWeather } from "./api.js";
import { displayWeather, showError, loaderSpinner } from "./ui.js";

const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  try {
    if (!city) {
      throw new Error("Please enter a city name.");
    }
    loaderSpinner(true);
    const data = await fetchWeather(city);
    displayWeather(data);
    cityInput.value ="";
  } catch (error) {
    console.error(error);
    showError("Sorry...An error occurred while fetching data!!");
  } finally {
    loaderSpinner(false);
  }
});
