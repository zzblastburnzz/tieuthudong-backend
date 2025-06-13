// ==== src/modules/report/report.module.ts ====
import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
