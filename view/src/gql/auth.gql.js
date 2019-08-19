import { gql } from 'apollo-boost';

const GET_USER_AUTH = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      userId
      token
      expiration
    }
  }
`;

export {
  GET_USER_AUTH
};