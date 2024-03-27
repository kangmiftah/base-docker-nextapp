import { key } from '@/config/app.config';
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
import { cookies } from 'next/headers';
// import {logger} from 'next'

export async function sign(payload: any, secret: string): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60* 60; // one hour

    return new SignJWT({...payload})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

export async function verify(token: string, secret: string): Promise<any> {

    try {
        
        const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));

        return payload;
    } catch (error: any) {
        console.error(`JWT ERR : ${error.toString()}`)
        return null
    }
}