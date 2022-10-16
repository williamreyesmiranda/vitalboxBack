import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionModule } from './modules/connection/connection.module';
import { PatientModule } from './modules/patient/patient.module';

@Module({
  imports: [
    ConnectionModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      cache: true,
      isGlobal: true,
    }),
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
