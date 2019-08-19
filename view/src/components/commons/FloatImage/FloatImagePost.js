import React from 'react';
import FloatImage from './FloatImage';

const FloatImagePost = props => {
  const {
    image_path
  } = props.selectedImage;
  return (
    <FloatImage>
      <div onClick={() => props.setOpenImage(false)}>
        <a style={{
          float: 'right',
          fontSize: '30px',
          position: 'relative',
          marginRight: '30px',
          marginTop: '30px'
        }}> x </a>
      </div>
      <div style={{ margin: '0 auto', textAlign: 'center'}}>
        <img
          style={{ height: '100vh', marginBottom: '10px' }}
          src={image_path}
        />
      </div>
    </FloatImage>
  );
}

export default FloatImagePost;