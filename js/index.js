import { fetchWeather } from "./api.js";
import { displayWeather } from "./ui.js";
import { displayError } from "./ui.js";

const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  try {
    if (!city) {
      throw new Error("Please enter a city name.");
    }
    const data = await fetchWeather(city);
    displayWeather(data);
  } catch (error) {
    console.error(error);
    displayError("Sorry...An error occured while fetching data!!");
  }
});
