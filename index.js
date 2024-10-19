document.addEventListener('DOMContentLoaded', () => {
    const fetchWeatherData = async (city) => {
        const apiKey = 'e0727e9cfe0ffb6ff1658042471b203e';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await axios.get(apiUrl);
            const data = response.data;

            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;

            document.getElementById('weather-location').textContent = `Location: ${location}`;
            document.getElementById('weather-temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('weather-description').textContent = `Description: ${description}`;
        } catch (error) {
            console.error('Erreur lors de la récupération des données météorologiques:', error);
        }
    };

    document.getElementById('fetch-weather').addEventListener('click', () => {
        const city = document.getElementById('city-input').value;
        fetchWeatherData(city);
    });
});
