import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "./database/prisma.service";
import { createNotificationsBody } from "./dtos/create-notifications-body";

@Controller("notifications")
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: createNotificationsBody): Promise<void> {
    const { category, content, recipientId } = body;

    await this.prisma.notifications.create({
      data: {
        id: crypto.randomUUID(),
        category,
        content,
        recipientId,
      },
    });
  }
}
