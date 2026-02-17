import 'dotenv/config';
import Redis from 'ioredis';


const redis = new Redis({
    'port': 6379,
    'host' : '127.0.0.1'
});

const UNIT_GROUP = 'metric';
const getEndPoint = (city)=> `${process.env.BASE_URL}${encodeURIComponent(city)}?unitGroup=${UNIT_GROUP}&key=${process.env.API_KEY}`;

export { redis, getEndPoint}