require('dotenv').config()
const {createClient}= require('redis') ;

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
    await client.lPush('names', 'Seif', 'Ashraf Elboghdady');
    const result = await client.lRange('names', 0, -1);
    console.log(result);
}

redisTest();




