const API_KEY = "b56720562f50c886e3fba57595b2e87e";

export async function fetchweather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found!!!");
        }
        const data = await response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Error:", error);
    }
}