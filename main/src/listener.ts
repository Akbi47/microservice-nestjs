import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen()
    .then(() => { console.log('Microservice is listening') })
}
bootstrap();
