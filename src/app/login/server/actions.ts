"use server";

import logger from "@/lib/helper/logger";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AppConfig, key } from "@/config/app.config";
import { sign } from "@/lib/server/jwt";
import { RedirectType } from "next/dist/client/components/redirect";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/server/prisma";
import * as bcrypt from "bcrypt";

export async function authenticating(_: FormData) {
   let username = _.get("username") || "";
   let password = _.get("password");
   let userDetail = await prisma.users.findFirst({
   
      include: {
         role: {},
      },
      where: {
         OR: [
            {
               email: username as string,
            },
            {
               username: username as string,
            },
         ],
      },
   });

   revalidatePath("/login");
   if (!userDetail)
      redirect(`/login?err=username/password salah`, RedirectType.push);
   
   let { password: pwd, ...userDetail_ } = userDetail

   let _passOk = await bcrypt.compare(password as string, pwd);
   if (!_passOk)
      redirect(`/login?err=username/password salah`, RedirectType.push);
   let jwtToken = await sign(userDetail_, AppConfig.SECRET_JWT);
   cookies().set(key.SESSIONKEY, jwtToken);
   redirect(`/`, RedirectType.push);
}

// export async function authenticating(formData: FormData) {
//    try {
//       logger.info(formData, "Data server" )
//     } catch (error: any) {
//     }
// }
