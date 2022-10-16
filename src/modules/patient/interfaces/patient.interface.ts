export interface PatientInterface {
    idPatient: number;
    name:      string;
    typeDni:   string;
    dni:       number;
    dateBirth: Date;
    weight:    number;
    height:    number;
    createdAt: Date;
    updatedAt?: Date;
}
