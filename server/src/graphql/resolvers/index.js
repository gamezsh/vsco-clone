import Query from './query';
import user from './user';
import posts from './posts';
import Mutation from './mutation';

const resolvers =  {
  Query: { ...Query },
  User: { ...user },
  Post: { ...posts }
}

export default resolvers;