import { createConnection } from 'typeorm';

export const dbConn = createConnection({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  port: 3306,
  database: 'manliest-db',
  synchronize: true,
  logging: true,
  entities: [
    __dirname + '/entity/*.ts'
  ]
});
