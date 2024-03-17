import { InputText } from "@lib-client/component/input";
import Image from "next/image";
import { env } from "process";
export default function Home() {
  return (
    <>
      <h1>
        {process.env.DATABASE_URL || ""}
      </h1>
    </>
  );
}
