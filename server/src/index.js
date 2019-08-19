import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import query from 'qs-middleware';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

import resolvers from './graphql/resolvers/index';
import typeDefs from './graphql/root';
import isAuth from '../src/graphql/middleware/isAuth';

mongoose.connect('mongodb://localhost:27017/vsco', { useNewUrlParser: true })
  .then(db => console.log('database connected!'))
  .catch(err => console.log(err))

app.use(query());
app.use(isAuth);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
      return {
        req, res
      }
  },
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
  }
});
server.applyMiddleware({ app });

/*
app.use(express.static(path.join(__dirname, 'dist')));
app.get('**', (req, res) => {
  console.log('dirname', __dirname)
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
*/

app.listen(port, host, () => {
  console.log(`server listen at http://localhost:${port}/graphql`);
});