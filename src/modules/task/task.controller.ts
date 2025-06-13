// ==== src/modules/task/task.controller.ts ====
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() body: { title: string; description: string; userId: string; mediaUrl?: string }) {
    return this.taskService.create(body);
  }

  @Get(':userId')
  findByUser(@Param('userId') userId: string) {
    return this.taskService.findByUser(userId);
  }
}
