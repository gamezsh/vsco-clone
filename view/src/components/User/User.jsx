import React from 'react';
import { 
  ProfileInfoPanel,
  ProfilePicturesPanel,
  InfoContainer,
  ImagesContainer
} from './styled';
import { Information } from './information';
import { Pictures } from './pictures';
import { FloatImagePost } from '../commons';

const User = props => {
  const [openImage, setOpenImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});
  const { user } = props;
  return (
    <React.Fragment>
     { openImage ? <FloatImagePost setOpenImage={setOpenImage} selectedImage={selectedImage} /> : null }
       <ProfileInfoPanel>
        <InfoContainer>
          <Information
            userInfo={user}
          />
        </InfoContainer>
      </ProfileInfoPanel>
      <ProfilePicturesPanel>
      <ImagesContainer>
          <Pictures
            setSelectedImage={setSelectedImage}
            openImage={openImage}
            setOpenImage={setOpenImage}
            posts={user.posts}
            {...props}
          />
        </ImagesContainer>
      </ProfilePicturesPanel>
    </React.Fragment>
  );
}

export default User;

