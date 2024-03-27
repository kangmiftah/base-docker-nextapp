import { headers } from "next/headers";
import { SERVERSIDEPROPS } from "../types";
import { authenticating } from "./server/actions";
import { redirect } from "next/navigation";
import { createClient } from "redis";
import { AppConfig } from "@/config/app.config";

export default async function LoginPage({ params, searchParams }: SERVERSIDEPROPS) {
   let { err = undefined } = searchParams;
   return (
      <>
         <form action={authenticating}>
            <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
               <div className="lg:w-[300px] sm:w-[300px] w-3/4">
                  <div className="p-3 border border-gray border-solid shadow-lg rounded-lg bg-white min-h-[300px]">
                     <h4 className="text-center my-3"> Welcome to APP</h4>

                     <div className="px-4 mt-4">
                        {err && (
                           <div className="bg-danger-500 text-sm mb-3 px-4 py-2 rounded-md text-white">
                              {" "}
                              {err}
                           </div>
                        )}
                        <div className="mb-4">
                           <label className="">Username</label>
                           <input
                              name="username"
                              autoComplete="off"
                              required={true}
                              type="text"
                              placeholder="username or email"
                              className="border  border-gray-500 shadow-outline active:outline-primary focus:outline-primary rounded-md py-2 px-3 w-full disabled:text-black disabled:bg-[#F2F2F2]"
                           />
                        </div>
                        <div className="mb-4">
                           <label className="">Password</label>
                           <input
                              name="password"
                              autoComplete="off"
                              required={true}
                              type="password"
                              placeholder="password"
                              className="border  border-gray-500 shadow-outline active:outline-primary focus:outline-primary rounded-md py-2 px-3 w-full disabled:text-black disabled:bg-[#F2F2F2]"
                           />
                        </div>

                        <div className="mb-4">
                           <button
                              type="submit"
                              className="w-full py-2 border bg-primary text-white rounded-md"
                           >
                              Login
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </>
   );
}
