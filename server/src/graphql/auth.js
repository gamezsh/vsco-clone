import { gql } from 'apollo-server-express';

const AuthTypes = gql`
  type Auth {
    userId: String!
    token: String!
    expiration: String!
  }
`;

export default AuthTypes;