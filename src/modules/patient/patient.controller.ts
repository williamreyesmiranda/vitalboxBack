import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { PatientService } from './services/patient.service';
import { PatientDto } from './dto/patient.dto';

@Controller('patient')
@ApiTags('patient')
export class PatientController {
    constructor(
        private patientService: PatientService,
    ) { }

    @Get('getAllPatients')
    getAllPatients() {
        return this.patientService.getAllPatients();
    } 
    @ApiParam({
        name:'idPatient',
        description:'Este es el id del paciente con el que va a consultar'
    })
    
    @Get('getPatientById/:idPatient')
    getPatientById(@Param('idPatient') idPatient:number){
        return this.patientService.getPatientById(idPatient);
    }

    @ApiBody({
        type: PatientDto,
        required:true,
        description:'estos son la parametros obligatorios para ingresar los datos',        
    })
    @Post('insertPatient')
    insertPatient(@Body()patient:PatientDto){
        return this.patientService.insertPatient(patient);
    }

    @Delete('deletePatient/:idPatient')
    @ApiParam({
        name:'idPatient',
        type:Number,
        description:'Este es el id del paciente al que se va a eliminar'
    })
    deletePatient(@Param('idPatient')idPatient:number){
        return this.patientService.deletePatient(idPatient);
    }

    @Put('updatePatient/:idPatient')
    @ApiParam({
        type:Number,
        name:'idPatient',
        description:'Este es el id del paciente al que se va a editar la información'
    })
    @ApiBody({
        type: PatientDto,
        required:true,
        description:'estos son la parametros obligatorios para actualizar los datos',        
    })
    updatePatient(@Param('idPatient')idPatient:number, @Body()patient:PatientDto){
       return this.patientService.updatePatient(idPatient, patient);
    }




}
