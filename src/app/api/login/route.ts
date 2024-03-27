import { NextResponse } from "next/server"

export  function GET(request: Request){



   return NextResponse.json({
      "response_code" : "00",
      "response_data" : {
         username: "Hafizh Qodarisman",
         umur: "90 Tahun"
      }
   }, { "headers": {
      "Set-Cookies" : "Data"
   } })
}