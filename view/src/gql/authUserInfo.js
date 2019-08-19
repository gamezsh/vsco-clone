import { gql } from "apollo-boost";

const GET_USER_INFO = gql`
  {
    me {
      _id
      name
      last_name
      username
      phone
      email
      password
      posts {
        _id
        user_id
        image_path
        caption
      }
    }
  }
`;

export {
  GET_USER_INFO
}