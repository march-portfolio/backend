import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors({
    origin: ['https://marchtanu.pages.dev'], 
    methods: 'GET,HEAD,PUT,PATCH,POST', 
    allowedHeaders: 'Content-Type, Authorization', 

  });
  await app.listen(process.env.PORT ?? 8000);

}
bootstrap();
