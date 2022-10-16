import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './services/patient.service';
import { PatientRepository } from './repository/patient.repository';
import { ConnectionModule } from '../connection/connection.module';

@Module({
  imports:[
    ConnectionModule
  ],
  controllers: [PatientController], 
  providers: [PatientService, PatientRepository]
})
export class PatientModule {}
