import { Injectable } from '@nestjs/common';
import { PatientRepository } from '../repository/patient.repository';
import 'dotenv/config'
import { PatientInterface } from '../interfaces/patient.interface';
import { PatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientService {
    constructor(
        private patientRepository:PatientRepository
    ){}

    async getAllPatients():Promise<any>{

        const resp = await this.patientRepository.getAllPatients();
        for(const r of resp){
            r.dateBirth = r.dateBirth.toLocaleDateString() //.replaceAll('-','/');
            r.createdAt =  `${r.createdAt.toLocaleDateString()} ${r.createdAt.toLocaleTimeString()}`;
        }
        return resp
    }
    async getPatientById(idPatient:number):Promise<any>{

        return await this.patientRepository.getPatientById(idPatient);
    }

    async insertPatient (patient: PatientDto){
        return await this.patientRepository.insertPatient(patient);
    }

    async deletePatient (idPatient:number){
        return await this.patientRepository.deletePatient(idPatient);
    }

    async updatePatient(idPatient:number, patient:PatientDto){
        return await this.patientRepository.updatePatient(idPatient, patient);
    }
}
