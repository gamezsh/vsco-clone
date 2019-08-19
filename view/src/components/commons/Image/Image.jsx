import React from 'react';
import { Redirect } from 'react-router-dom';
import { ImageContainer, ImageDescription, ImageSrc } from './styled'; 

const Image = props => {
  console.log(props)
  const { feed } = props;

  console.log(feed)
  return (
    <ImageContainer>
      <ImageSrc src={feed.image_path} />
      <ImageDescription>
        <p style={{marginTop: 20}}> 
          <a style={{ textDecoration: 'none', color: 'black' }} href={`/user/${feed.user.username}`}>
            <b> {feed.user.username} </b>
          </a> {feed.caption} 
        </p>
      </ImageDescription>
    </ImageContainer>
  );
};

export default Image;