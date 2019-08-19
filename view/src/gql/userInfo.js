import { gql } from "apollo-boost";

const GET_PROFILE_INFO = gql`
  query User($id: String, $username: String) {
    user(_id: $id, username: $username) {
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

export { GET_PROFILE_INFO };