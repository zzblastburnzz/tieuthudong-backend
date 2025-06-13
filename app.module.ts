// ==== app.module.ts ====
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AiModule } from './modules/ai/ai.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AiModule,
    TaskModule,
  ],
})
export class AppModule {}


// ==== prisma/schema.prisma ====
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String   @id @default(uuid())
  name     String
  role     String   // 'child' | 'parent'
  age      Int
  gender   String
  createdAt DateTime @default(now())
}

model Task {
  id        String   @id @default(uuid())
  title     String
  description String
  mediaUrl  String?
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}
