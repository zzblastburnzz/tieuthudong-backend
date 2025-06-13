// ==== src/modules/report/report.service.ts ====
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ReportService {
  async generateReport(userId: string) {
    const behaviors = await prisma.behaviorLog.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
    });

    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return {
      summary: `Tổng hợp ${behaviors.length} hành vi và ${tasks.length} nhiệm vụ gần đây`,
      behaviors,
      tasks,
    };
  }
}