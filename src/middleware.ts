import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { NextURL } from "next/dist/server/web/next-url";
import { verify } from "./lib/server/jwt";
import { AppConfig, key } from "./config/app.config";

let allowUrlUnAuthOnly: Array<string> = ["/login"];

export async function middleware(request: NextRequest) {
   let reqUrl = request.nextUrl.pathname;

   let session = cookies().get(key.SESSIONKEY);
   let tokenVerified = false;
   if(session?.value){
      let dataToken = await verify(session.value, AppConfig.SECRET_JWT)
      if(!dataToken) {
         let resp = NextResponse.redirect(new URL("/login", request.url));
         resp.cookies.delete(key.SESSIONKEY);
         return resp;
      }
   }

   // if(reqUrl=== "/") {
   //    if (session?.value)  return NextResponse.redirect(new URL("/dashboard", request.url))
   //    else  return NextResponse.redirect(new URL("/login", request.url))
   // }

   if (allowUrlUnAuthOnly.some((v) => v === reqUrl)){
      if(session?.value)  return NextResponse.redirect(new URL("/", request.url));
   } else if (!session?.value) {
      return NextResponse.redirect(new URL("/login", request.url));
   }

   const headers = new Headers(request.headers);

   headers.set("sessionId", "ini header bro")
   return NextResponse.next({
      request: {
         headers
      }
   });
}

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
