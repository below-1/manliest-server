import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import chalk from 'chalk';
import { dbConn } from './db';

export async function main({ port=3000 }) {

  const app = express();
  const db = await dbConn;
  const typeDefs = importSchema('./src/gql/schema/schema.graphql');
  const resolvers = {};
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const apolloServer: ApolloServer = new ApolloServer({
    schema
  });

  app.get('/test', (req, resp) => {
    resp.end('Hello, Express');
  });
  apolloServer.applyMiddleware({ app });

  try {
    app.listen(port);
    console.log(chalk.blueBright(`Server listening at ${3000}`));
    console.log(chalk.red('Press CTRL+C to stop'));
  } catch (err) {
    console.log(err);
  }
}