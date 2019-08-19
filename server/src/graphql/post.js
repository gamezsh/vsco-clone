import { gql } from 'apollo-server-express';

const postTypes = gql`
  type Post {
    _id: String!
    user_id: String!
    image_path: String!
    caption: String!
    user: User
  }
`;

export default postTypes;


