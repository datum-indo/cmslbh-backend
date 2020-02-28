import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';
import * as util from 'util';
@Injectable()
export class MysqlService {


  async processQuery(query: string) {
    try {
      const connection = mysql.createConnection({
        host: 'localhost',
        port: 42333,
        user: 'root',
        password: 'prisma',
        database: 'default@default',
      });
      // const connection = mysql.createConnection({
      //   host: 'mysql',
      //   port: 3306,
      //   user: 'root',
      //   password: 'cmslbh123',
      //   database: 'default@default',
      // });


      connection.connect();

      const queryPromise = await util.promisify(
        connection.query.bind(connection),
      );

      const result = await queryPromise(query);
      connection.end();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
