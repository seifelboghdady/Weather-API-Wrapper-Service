import axios from 'axios'
import { getEndPoint } from '../config/redis.js';
import { getCache, setCache } from './cache.service.js';


const getWeather = async(city)=>{
    const startcache = Date.now();
    let cachEntry = await getCache(`weather:${city}`)
    const endcache = Date.now();
    const cacheTime = endcache - startcache;
    //if we a had cache hit 
    if(cachEntry){
        return {...cachEntry, 'source':'cache', 'responseTime': cacheTime}
    }
    
    
    //otherwise we are calling api for response
    const startApi = Date.now();
    let apiResponse = await axios.get(getEndPoint(city));
    const endApi = Date.now();
    const apiTime = endApi - startApi;
    setCache(`weather:${city}`, apiResponse.data, 60*60) //cache for 1 hour
    return{...apiResponse.data,'source' :'api', 'responseTime': apiTime }
}
export { getWeather }