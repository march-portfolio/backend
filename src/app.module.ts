import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';
import { Contact } from './contact/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'contacts.sqlite',
      entities: [Contact],
      synchronize: true, // Don't use in production
      logging: false,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}