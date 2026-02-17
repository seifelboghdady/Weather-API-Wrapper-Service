import Router from 'express';
import { getWeatherController } from '../controllers/weather.controller.js';

const router = Router();

router.post('/', (req, res) => {
    getWeatherController(req, res);
    
})

export default router;
