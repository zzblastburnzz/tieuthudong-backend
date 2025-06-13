// ==== src/modules/task/task.service.ts ====
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TaskService {
  async create(data: { title: string; description: string; userId: string; mediaUrl?: string }) {
    return prisma.task.create({ data });
  }

  async findByUser(userId: string) {
    return prisma.task.findMany({ where: { userId } });
  }
}
