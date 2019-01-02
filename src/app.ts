import express from 'express';
import chalk from 'chalk';
import { dbConn } from './db';

export async function main({ port=3000 }) {

  const app = express();
  const db = await dbConn;

  app.get('/test', (req, resp) => {
    resp.end('Hello, Express');
  });

  return app;
  
  const server = app.listen(port, () => {
    console.log(chalk.blue('Server is running'));
    console.log(chalk.red('Press CTRL+C to exit'));
  });
}