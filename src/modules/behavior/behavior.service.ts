// ==== src/modules/behavior/behavior.service.ts ====
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BehaviorService {
  async log(data: { userId: string; type: string; value: string }) {
    return prisma.behaviorLog.create({ data });
  }

  async getByUser(userId: string) {
    return prisma.behaviorLog.findMany({ where: { userId } });
  }
}
