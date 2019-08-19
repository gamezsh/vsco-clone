
import { gql } from 'apollo-server-express';

const userTypes = gql`
  type User {
    _id: String!
    name: String!
    last_name: String!
    username: String!
    phone: String!
    email: String!
    password: String!
    posts: [Post]!
  }
`;

export default userTypes;