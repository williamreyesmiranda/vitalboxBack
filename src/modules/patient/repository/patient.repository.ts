import { Injectable, Logger } from '@nestjs/common';
import { ConnectionService } from '../../connection/connection.service';
import { Querys } from '../resources/querys';
import { PatientDto } from '../dto/patient.dto';

@Injectable()
export class PatientRepository {
    
    constructor(
        private dbConnection: ConnectionService
    ) {

    }

    async getAllPatients():Promise<any>{
        try {
            const resp = await this.dbConnection.query(Querys.SELECT_ALL_PATIENS);
            return resp;
        } catch (error) {
            Logger.error(error, 'repository getAllPatients');
            throw error;
        }
    }

    async getPatientById(idPatient:number):Promise<any>{
        try {
            const resp = await this.dbConnection.query(Querys.SELECT_PATIENT_BY_ID,[idPatient]);
            return resp[0];
        } catch (error) {
            Logger.error(error, 'repository getpatientById');
            throw error;
        }
    }
    async insertPatient(patient:PatientDto):Promise<any>{
        const {name, typeDni, dni, dateBirth, weight, height } = patient;
        try {
            const resp = await this.dbConnection.query(Querys.INSERT_PATIENT,[name, typeDni, dni, dateBirth, weight, height]);
            return resp;
        } catch (error) {
            Logger.error(error, 'repository insertPatient');
            throw error;
        }
    }

    async deletePatient(idPatient:number):Promise<any>{        
        try {
            const resp = await this.dbConnection.query(Querys.DELETE_PATIENT,[idPatient]);
            return resp;
        } catch (error) {
            Logger.error(error, 'repository deletePatient');
            throw error;
        }
    }

    async updatePatient(idPatient:number, patient:PatientDto):Promise<any>{  
        const {name, typeDni, dni, dateBirth, weight, height } = patient;
        try {
            const resp = await this.dbConnection.query(Querys.UPDATE_PATIENT,[name, typeDni, dni, dateBirth, weight, height, idPatient]);
            return resp;
        } catch (error) {
            Logger.error(error, 'repository deletePatient');
            throw error;
        }
    }






    
}
