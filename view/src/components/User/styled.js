import styled from 'styled-components';

const ProfileInfoPanel = styled.div`
  width: 100%;
  background: white;  
  margin-bottom: 30px;
`;

const ProfilePicturesPanel = styled.div`
  width: 100%;
  background: white;
  margin: 0 auto;
  display: flex;
`;

const InfoContainer = styled.div`
  text-align: center;
  padding-top: 100px;
`;

const ImagesContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export { 
  ProfileInfoPanel,
  ProfilePicturesPanel,
  InfoContainer,
  ImagesContainer,
}