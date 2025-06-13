// ==== src/modules/report/report.controller.ts ====
import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get(':userId')
  async generate(@Param('userId') userId: string) {
    return this.reportService.generateReport(userId);
  }
}