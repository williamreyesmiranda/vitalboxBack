import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PatientDto{

  

    @ApiProperty({
        title:'name',
        type: String,
        required:true,
        description:'Nombre del Paciente'
    })
    @IsNotEmpty({message:'El nombre no debe estar vacío'})
    @IsString({message:'El nombe debe ser string'})
    name!:string;

    @ApiProperty({
        title:'typeDni',
        type: String,
        required:true,
        description:'Tipo de identificación del Paciente'
    })
    @IsNotEmpty({message:'El tipo de identificación no debe estar vacío'})
    @IsString({message:'El tipo de identificación debe ser string'})
    typeDni!:string;

    @ApiProperty({
        title:'dni',
        type: Number,
        required:true,
        description:'Número de identificación del Paciente'
    })
    @IsNotEmpty({message:'El número de identificación no debe estar vacío'})
    @IsNumber({},{message:'El peso debe ser número'})
    dni!:number;

    @ApiProperty({
        title:'dateBirth',
        type: Date,
        required:true,
        description:'Fecha de nacimiento del Paciente'
    })
    @IsNotEmpty({message:'La fecha de nacimiento no debe estar vacío'})
    dateBirth!:Date;

    @ApiProperty({
        title:'weight',
        type: Number,
        required:true,
        description:'Peso del Paciente'
    })
    @IsNotEmpty({message:'El peso no debe estar vacío'})
    @IsNumber({},{message:'El peso debe ser número'})
    weight!:number;

    @ApiProperty({
        title:'height',
        type: Number,
        required:true,
        description:'Estatura del Paciente'
    })
    @IsNotEmpty({message:'La estatura no debe estar vacío'})
    @IsNumber({},{message:'La estatura debe ser número'})
    height!:number;    
}