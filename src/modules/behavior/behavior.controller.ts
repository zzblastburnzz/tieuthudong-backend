// ==== src/modules/behavior/behavior.controller.ts ====
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BehaviorService } from './behavior.service';

@Controller('behavior')
export class BehaviorController {
  constructor(private readonly behaviorService: BehaviorService) {}

  @Post()
  log(@Body() body: { userId: string; type: string; value: string }) {
    return this.behaviorService.log(body);
  }

  @Get(':userId')
  getByUser(@Param('userId') userId: string) {
    return this.behaviorService.getByUser(userId);
  }
}