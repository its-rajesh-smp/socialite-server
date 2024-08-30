import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getEnv from './utils/env.helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: getEnv('CLIENT_URL'),
  });
  app.useGlobalPipes(new ValidationPipe());
  const appPort = getEnv('PORT');
  await app.listen(appPort, () => {
    console.log(`Application is running on: http://localhost:${appPort}`);
  });
}
bootstrap();
