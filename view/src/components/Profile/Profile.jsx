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

const Profile = props => {
  const [openImage, setOpenImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});
  const { posts, user, loadingImg } = props;
  return (
    <div>
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
            loadingImg={loadingImg}
            posts={posts}
            {...props}
          />
        </ImagesContainer>
      </ProfilePicturesPanel>
    </div>
  );
};

export default Profile;