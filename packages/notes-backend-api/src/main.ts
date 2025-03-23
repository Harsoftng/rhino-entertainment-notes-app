import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import helmet from 'helmet';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./shared/transform.interceptor";

async function bootstrap() {
  const port = Number(process.env.BACKEND_SERVICE_PORT || 8080);

  const app = await NestFactory.create(AppModule, {cors: true});

  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(port, () => {
    console.log(`Notes backend started on port ${port}`);
  });
}
bootstrap();
