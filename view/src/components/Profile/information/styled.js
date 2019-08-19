import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const ProfileName = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  color: #000;
  height: 33%;
  font-weight: 400;
`;

const ProfileUserName = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #aaa;
  height: 33%;
  margin-top: 7px;
`;

const ImageLabel = styled.h4`
  font-weight: 400;
  font-size: 14px;
  color: #000;
  height: 33%;
  margin-top: 30px;
`;

export { 
  ProfileImage,
  ProfileName,
  ProfileUserName,
  ImageLabel
}