import axios from 'axios'
import { getEndPoint } from '../config/redis.js';
import { getCache, setCache } from './cache.service.js';


const getWeather = async(city)=>{

    let cachEntry = await getCache(`weather:${city}`)
    
    //if we a had cache hit 
    if(cachEntry){
        return {...cachEntry, 'source':'cache'}
    }
    
    
    //otherwise we are calling api for response
    let apiResponse = await axios.get(getEndPoint(city));
    setCache(`weather:${city}`, apiResponse.data, 60*60) //cache for 1 hour
    return{...apiResponse.data,'source' :'api'}
}
export { getWeather }