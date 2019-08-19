import React, { useContext } from 'react';
import Profile from './Profile'
import { UserContext } from '../../context/UserContext';

const ProfileContainer = props => {
  const { user, loadingImg } = useContext(UserContext);
  return (
    <Profile
      loadingImg={loadingImg}
      user={user}
      userInfo={user}
      posts={user.posts}
      {...props}
    />
  );
};

export default ProfileContainer;