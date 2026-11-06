import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';


const mysqlConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'orders'})

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  
}
