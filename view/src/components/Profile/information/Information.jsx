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
      <ProfileImage src={'https://upload.wikimedia.org/wikipedia/commons/f/f4/Perrito_triste.jpg'} />
      <ProfileName> {userInfo.name} {userInfo.last_name}</ProfileName>
      <ProfileUserName> {userInfo.username} </ProfileUserName>
      <ImageLabel> Images </ImageLabel>
    </React.Fragment>
  );
}

export default Information;