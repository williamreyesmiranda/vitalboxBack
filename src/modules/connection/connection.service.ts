import { Injectable } from '@nestjs/common';
import { createPool } from "mysql";
import 'dotenv/config'

@Injectable()
export class ConnectionService {
    private connection;
    constructor() {
        this.connection = this.createConnection();
    }


    private createConnection() {
        return createPool({
            host: process.env.HOST_DB,
            user: process.env.USER_DB, 
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE_DB,
            connectionLimit: 100,
            supportBigNumbers: true,
            port: parseInt(process.env.PORT_DB) 
        })
    }

    /**
   * @param {*} sql
   * @param {*} args
   * Metodo que hace el query en la db
   */
    public async query(sqli, args = []) {
        return new Promise((resolve, reject) => {
            this.connection.getConnection(function (err, connection) {
                if (err) {
                    return reject(err)
                }
                connection.query(sqli, args, function (err, result) {
                    connection.release()
                    if (err) {
                        return reject(err)
                    }
                    return resolve(result)
                })
            })
        })
    }


}