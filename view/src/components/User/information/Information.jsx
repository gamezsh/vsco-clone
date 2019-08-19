import React from 'react';
import { 
  ProfileImage,
  ProfileName,
  ProfileUserName,
  ImageLabel
} from './styled';
const Information = props => {
  const { userInfo } = props;
  return (
    <React.Fragment>
      <ProfileImage src={'https://image-aws-us-west-2.vsco.co/d0487c/17365194/59af8ae85d8aa4138d935ef7/vsco59af8aecb7637.jpg'} />
      <ProfileName> {userInfo.name} {userInfo.last_name}</ProfileName>
      <ProfileUserName> {userInfo.username} </ProfileUserName>
      <ImageLabel> Images </ImageLabel>
    </React.Fragment>
  );
}

export default Information;