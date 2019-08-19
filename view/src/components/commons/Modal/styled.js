import styled from 'styled-components';

const StyledModal = styled.div`
  z-index: 1;
  position: fixed;
  width: 50%;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

const StyledModalBox = styled.div`
  border-radius: 3px;
  width: 30%;
  border: 1px solid palevioletred;
  justify-content: center;
  background: white;
  height: 50%;
  margin: 0 auto;
  margin-top: 100px;
`;

export {
  StyledModal,
  StyledModalBox,
};