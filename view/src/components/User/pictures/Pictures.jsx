import React from 'react';
import { ProfilePicture, WrapImage } from './styled';

function Pictures(props) {
  const { posts, loadingImg, setOpenImage, openImage, setSelectedImage } = props;
  return (
    <React.Fragment>
      {!loadingImg && posts && posts.map(post =>
        <WrapImage>
          <ProfilePicture title={post.caption} onClick={() => { 
            setOpenImage(!openImage);
            setSelectedImage(post)
          }} src={post.image_path} />
        </WrapImage>
      )}
    </React.Fragment>
  );
}

export default Pictures;