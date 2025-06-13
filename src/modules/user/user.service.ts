// ==== src/modules/user/user.service.ts ====
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(data: { name: string; role: string; age: number; gender: string }) {
    return prisma.user.create({ data });
  }

  async findAll() {
    return prisma.user.findMany();
  }
}