import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post()
  echoBody(@Body() body: any) {
    return {
      message: 'Received body successfully!',
      data: body,
    };
  }

  @Post()
  echoBody(@Body() body: any) {
    return {
      message: 'Received body successfully!',
      data: body,
    };
  }
}