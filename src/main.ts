import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix('/api/v1')

  const port = process.env.PORT || 3002
  await app.listen(port, () => {
    console.log('Listening on port ', port);
  });
}
bootstrap();
