import React from 'react';

import { StyledFloatImage } from './styled';

const FloatImage = props => {
  return (
    <StyledFloatImage>
      {props.children}
    </StyledFloatImage>
  );
}

export default FloatImage;