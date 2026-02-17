import Router from 'express';
import { getWeatherController } from '../controllers/weather.controller.js';
import { generateWeatherPDF } from '../services/pdf.service.js';
import { getWeather } from '../services/weather.service.js';

const router = Router();

router.post('/', (req, res) => {
    getWeatherController(req, res);
    
})

router.post('/report', async (req, res) => {
    //take the weather data form cache and path it to the pdf generator
  const city = req.body.city;
  const start = Date.now();

  const data = await getWeather(city);

  const end = Date.now();


  const weatherData = {

    ...data,

    responseTime: end - start

  };


  generateWeatherPDF(weatherData, res);

})


export default router;
