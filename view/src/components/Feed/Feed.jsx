import React from 'react';
import { Image } from '../commons';

const Feed = props => {

  const { feed } = props;
  console.log(feed)
  return (
    <React.Fragment>
      {feed.map(post => 
        <Image
          feed={post}
        />
      )}
    </React.Fragment>
  );
}
export default Feed;