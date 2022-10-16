import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv/config'
const port = process.env.PORT || 3000;
const serverName = process.env.SERVICE_NAME || 'apiVitalbox';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(serverName)

  const config = new DocumentBuilder()
    .setTitle('Api Vitalbox')
    .setDescription('Documentacion de los API\'s desarrollados para la prueba ')
    .setVersion('1.0')
    .build();
  const opSwagger = {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDurations: true,
    },
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document, opSwagger);
  await app.listen(port);
  Logger.log(
    (serverName) +
    (' RUNNING ON ') +
    (`http://localhost:${port}`), 
    'Bootstrap',
  );
}
bootstrap();
