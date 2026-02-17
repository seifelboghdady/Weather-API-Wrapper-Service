
//this for redis service Get and Set
import { redis } from '../config/redis.js';

const getCache = async (key) => {
    let cacheEntry = await redis.get(key);
    if (cacheEntry) {
        cacheEntry = JSON.parse(cacheEntry);
        return cacheEntry;
    }
    return null;
}

const setCache = async (key, value, ttl) => {
    await redis.set(key, JSON.stringify(value), 'EX', ttl);
}

export { getCache, setCache }

