import styled from 'styled-components';

const StyledFloatImage = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: block;
  &:img {
    opacity: 0;
  }
`;

export {
  StyledFloatImage
}