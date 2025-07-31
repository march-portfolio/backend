import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
