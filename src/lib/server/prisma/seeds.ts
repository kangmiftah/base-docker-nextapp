


import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()
async function main() {
   

   const role = await prisma.role.createMany({
      data: [
         {
            role_code: "admin",
            role_name: "Administrator"
         },
         {
            role_code: "opr",
            role_name: "Operator"
         }
      ]
   });

   const users = await prisma.users.createMany({
      data: [
         {
            name: "Admin",
            password: bcrypt.hashSync("123123", bcrypt.genSaltSync()),
            role_code: "admin",
            email: "admin@isi.com",
            username: "admin"
         }
      ]
   })
}


main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });
