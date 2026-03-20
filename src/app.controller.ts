import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  echoBody(@Body() body: any) {
    return {
      message: 'Received body successfully!',
      data: body,
    };
  }
}
