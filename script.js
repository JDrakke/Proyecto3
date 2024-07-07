import { getWeatherData } from './api.js';
import { createCitySelector } from './components/CitySelector.js';
import { createWeatherCard } from './components/WeatherCard.js';
import { createCharts } from './charts.js';

const citySelect = document.getElementById('city-select');
const weatherCardContainer = document.querySelector('.weather-card');
const chartsContainer = document.querySelector('.charts');

createCitySelector(citySelect);

citySelect.addEventListener('change', async () => {
    const city = citySelect.value;
    const weatherData = await getWeatherData(city);
    createWeatherCard(weatherCardContainer, weatherData);
    createCharts(chartsContainer, weatherData);
});