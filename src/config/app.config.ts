export const AppConfig = {

   SECRET_JWT : process.env.SECRET_JWT || "",
   REDIS_HOST: process.env.REDIS_HOST || "",
   REDIS_PORT:  process.env.REDIS_PORT || "",
   REDIS_PASS:  process.env.REDIS_PASS || "",
}

export enum key {
   SESSIONKEY = 'sessionId'
}