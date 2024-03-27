
/**
 * 
 * Contoh page dengan serverside rendering
 */

import { SERVERSIDEPROPS } from "../types"
import ClientPage from "./client-page"

export default function Page({ params = {}, searchParams }: SERVERSIDEPROPS) {

   /**
    * Logic and function untuk server side component tidak bisa menggunakan library react seperti biasa
    * hanya bisa menggunakan functional serverside seperti connect db dll
    */

   /**
    * console ini bakal keluar bagian logging di cmd, membuktikan berjalan di sisi server
    */

   console.log("INI SERVER")


   /**
    * Untuk load / render client side component, maka diperlukan memanggil component tersebut di serverside renderingnya
    */
   return (
      <>
            <h1>Server Side Page</h1>
            <ClientPage />
      </>
   )

}