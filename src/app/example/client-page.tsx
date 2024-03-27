/**
 * Use client -> untuk mendeklrasikan bahwa component ini adalah component client side
 */
'use client';

export default function ClientPage(){
   /**
    * Logic and function untuk client side component bisa menggunakan library react seperti biasa
    */


   
   /**
    * console ini bakal keluar bagian logging di browser, membuktikan berjalan di sisi client
    */

   console.log("INI CLIENT")

   return(<>
      <h1> Client Page </h1>
   </>)
}

