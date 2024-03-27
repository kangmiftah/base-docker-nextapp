import { AppConfig } from '@/config/app.config';
import redis from 'redis';


let redisClient = redis.createClient({
   url: `redis://default:${AppConfig.REDIS_PASS}@${AppConfig.REDIS_HOST}:${AppConfig.REDIS_PORT}`
})
redisClient.on('error', err => console.log('Redis Client Error', err));
