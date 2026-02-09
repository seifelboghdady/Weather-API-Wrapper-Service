require('dotenv').config()
const {createClient}= require('redis') ;

const LOCATIONS = ['Cairo', 'Mansoura']
const UNIT_GROUP = 'metric';
const CONTENT_TYPE = 'json';

async function fetchWeatherData(location) {
    const url = `${process.env.BASE_URL}${encodeURIComponent(location)}?unitGroup=${UNIT_GROUP}&key=${process.env.API_KEY}&contentType=${CONTENT_TYPE}`;
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        console.log(`Weather for ${location}:`);
        // console.log(weatherData);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

LOCATIONS.forEach(location => {
    fetchWeatherData(location);
});



const client = createClient({
    username: 'default',
    password: process.env.PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', err => console.log('Redis Client Error', err));

async function redisTest() {
    await client.connect();

    await client.lPush(names,'mohamed', 'seif', 'ashraf');
    const result = await client.get(names);

    console.log(result);
}

redisTest();




