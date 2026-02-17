import { getWeather } from '../services/weather.service.js';


const getWeatherController = (req, res) => {
    const city = req.body.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }
    getWeather(city)
        .then(weather => res.json(weather))
        .catch(error => res.status(500).json({ error: 'Failed to fetch weather data' }));
    
}

export { getWeatherController }
