"use server";
import { AppConfig, key } from "@/config/app.config";
import { cookies } from "next/headers";
import { verify } from "./jwt";

export async function getServerSession(){
   let sessionId = cookies().get(key.SESSIONKEY)?.value;
   let sessionUser = await verify(sessionId || "", AppConfig.SECRET_JWT)
   if(sessionUser){
      let {  exp, iat, nbf, ..._sessionUser} = sessionUser
      return _sessionUser;
   }
   return null
}