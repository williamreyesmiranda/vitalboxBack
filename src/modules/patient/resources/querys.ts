export enum Querys{
    SELECT_ALL_PATIENS= `select * from patients`,
    SELECT_PATIENT_BY_ID= `select * from patients where idPatient = ?`,
    INSERT_PATIENT= `insert into patients (name, typeDni, dni, dateBirth, weight, height) values (?,?,?,?,?,?)`,
    DELETE_PATIENT= `delete from patients where idPatient= ?`,
    UPDATE_PATIENT = `update patients set name=?, typeDni=?, dni=?, dateBirth=?, weight=?, height=?, updatedAt=CURRENT_TIMESTAMP where idPatient=?`
}