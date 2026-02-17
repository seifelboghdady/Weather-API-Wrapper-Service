import 'dotenv/config';
import Redis from 'ioredis';


const redis = new Redis({
    host: "redis",
    port: 6379,
});

const UNIT_GROUP = 'metric';
const getEndPoint = (city)=> `${process.env.BASE_URL}${encodeURIComponent(city)}?unitGroup=${UNIT_GROUP}&key=${process.env.API_KEY}`;

export { redis, getEndPoint}