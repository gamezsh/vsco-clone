import { gql } from "apollo-boost";

const GET_FEED = gql`
{
  feed {
  	caption
  	image_path
  	user {
    		username
  	}
	}
}
`;

export {
  GET_FEED
}