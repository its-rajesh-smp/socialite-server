import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import getEnv from '../utils/env.helpers';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());
  const appPort = getEnv('PORT') || 3000;
  await app.listen(appPort, () => {
    console.log(`Application is running on: http://localhost:${appPort}`);
  });
}
bootstrap();
