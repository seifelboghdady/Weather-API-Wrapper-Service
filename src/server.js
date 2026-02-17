import express from 'express';
import 'dotenv/config';
import route from './routes/weather.route.js';
import cors from 'cors';



// const redis = new Redis({
//     'port': 6379,
//     'host' : '127.0.0.1'
// });
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', route);


// app.post('/', (req, res) => {
//     const city = req.query.city;
//     if (!city) {
//         return res.status(400).json({ error: 'City is required' });
//     }
//     getWeather(city)
//         .then(weather => res.json(weather))
//         .catch(error => res.status(500).json({ error: 'Failed to fetch weather data' }));
    
// })

// const UNIT_GROUP = 'metric';
// const getEndPoint = (city)=> `${process.env.BASE_URL}${encodeURIComponent(city)}?unitGroup=${UNIT_GROUP}&key=${process.env.API_KEY}`;

// const getWeather = async(city)=>{
//     //we want do caching
//     //we check a cached valued of the city we want 
//     let cachEntry = await redis.get(`weather:${city}`)
    
//     //if we a had cache hit 
//     if(cachEntry){
//         cachEntry = JSON.parse(cachEntry)
//         return {...cachEntry, 'source':'cache'}
//     }
    
//     //return that entry
    
//     //otherwise we are calling api for response
//     let apiResponse = await axios.get(getEndPoint(city));
//     redis.set(`weather:${city}`, JSON.stringify(apiResponse.data), 'EX', 60*60) //cache for 1 hour
//     return{...apiResponse.data,'source' :'api'}
// }


exports.app = app;

// app.listen(4000, ()=>{
//     console.log('The server is Turn on port 4000');
// })