import styled from 'styled-components';

const LoginStyledContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const LeftPanel = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  background: black;
`;

const RightPanel = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  background: transparent;
`;

const FormContainer = styled.div`
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 50%;
  margin: 0  auto;
`;

const InputContainer = styled.div`
  padding: 0.1em;
  text-align: center;
`;

const SignInRef = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: black;
`;

export {
  LoginStyledContainer,
  LeftPanel,
  RightPanel,
  FormContainer,
  InputContainer,
  SignInRef,
};