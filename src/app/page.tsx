import { getServerSession } from "@/lib/server/session";
import { InputText } from "@lib-client/component/input";
import Image from "next/image";
import { env } from "process";
export default async function Home() {
   let session = await getServerSession();

   return (
      <>
         <h1>{JSON.stringify(session)}</h1>
      </>
   );
}
