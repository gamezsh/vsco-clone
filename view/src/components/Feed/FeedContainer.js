import React from 'react';
import Feed from './Feed';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_FEED } from '../../gql/feed';

const FeedContainer = props => {
  const [posts, setPosts] = React.useState([]);
  const client = useApolloClient();

  React.useEffect(() => {
    async function fetchFeed() {
      const { data } = await client.query({ query: GET_FEED });
      setPosts(data.feed);
    }
    fetchFeed();
  }, []);

  return (
    <React.Fragment>
      <Feed
        feed={posts} 
        {...props} 
      />
    </React.Fragment>
  );
}

export default FeedContainer;