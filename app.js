const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
async function fetchWeather(city) {
  try {
    showLoading(true);

    const currentRes = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!currentRes.ok) throw new Error("City not found");

    const currentData = await currentRes.json();

    const forecastRes = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const forecastData = await forecastRes.json();

    displayCurrentWeather(currentData);
    displayForecast(forecastData);

    localStorage.setItem("city", city);
    showError("");
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}
function displayCurrentWeather(data) {
  document.getElementById("currentWeather").innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.weather[0].description}</p>
    <h3>${data.main.temp}°C</h3>
  `;
}
function displayForecast(data) {
  const forecastEl = document.getElementById("forecast");
  forecastEl.innerHTML = "";

  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  daily.forEach(day => {
    forecastEl.innerHTML += `
      <div>
        <p>${new Date(day.dt_txt).toDateString()}</p>
        <p>${day.main.temp}°C</p>
      </div>
    `;
  });
}
document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const city = document.getElementById("cityInput").value.trim();
  if (city) fetchWeather(city);
});
window.onload = () => {
  const savedCity = localStorage.getItem("city");
  if (savedCity) fetchWeather(savedCity);
};
function showLoading(isLoading) {
  document.getElementById("loading").classList.toggle("hidden", !isLoading);
}

function showError(message) {
  document.getElementById("error").textContent = message;
}
