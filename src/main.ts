import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getEnv from 'utils/env/env.helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appPort = getEnv('PORT') || 3000;
  await app.listen(appPort);
}
bootstrap();
