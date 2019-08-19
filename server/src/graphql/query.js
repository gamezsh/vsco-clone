import { gql } from 'apollo-server-express';

const queryTypes = gql`
  type Query {
    me: User
    feed: [Post]!
    users: [User]!
    user(_id: String, username: String): User!
    userPosts(_id: String): [Post]!
    login(username: String!, password: String!): Auth!
  }
`;

export default queryTypes;