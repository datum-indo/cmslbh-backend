import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// tslint:disable-next-line: no-var-requires
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // console.log(process.env.HOST)
  // await app.listen(process.env.PORT, process.env.HOST);
  await app.listen(process.env.PORT);
}
bootstrap();
