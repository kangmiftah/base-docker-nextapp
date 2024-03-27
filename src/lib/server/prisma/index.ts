import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient = new PrismaClient() ;

if (process.env.NODE_ENV === "production") {
  
 } else {
   if (!(global as any).prisma) {
      (global as any).prisma = new PrismaClient()
   }
 
   prisma = (global as any).prisma
 }
//  prisma = new PrismaClient()
export default prisma;