import styled, { css } from 'styled-components';

const WrapImage = styled.div`
  display: block;
  width: 500px;
  margin: 2.5px;
  flex-grow: 1;
`;

const ProfilePicture = styled.img`
  object-fit: cover;
  width: 100%;
  vertical-align: bottom;
  cursor: pointer;
`;

export {
  WrapImage,
  ProfilePicture,
}