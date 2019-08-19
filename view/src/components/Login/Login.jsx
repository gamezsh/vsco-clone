import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_USER_AUTH } from '../../gql/auth.gql';

import {
  FormContainer,
  InputContainer,
  LeftPanel,
  RightPanel,
  LoginStyledContainer,
  SignInRef,
} from './styled';
import { Button, Input, Modal } from '../commons';

const Login = props => {
  const client = useApolloClient();

  const {
    isLoading,
    setLoading,
    disabled,
    setDisable,
    signIn,
    setSignIn,
    inputValue,
    fields,
    ffields,
    sessionDispatch,
  } = props;

  const { username, password } = ffields;
  return (
  <React.Fragment>
    <LoginStyledContainer>
    { props.signIn ? <Modal /> : null }
    <LeftPanel />
      <RightPanel>
          <FormContainer>
            <InputContainer>
            <Input
                {...fields.username}
                onKeyUp={(e) => inputValue(e)}
              />
          </InputContainer>
          <InputContainer>
            <Input
              {...fields.password}
              onKeyUp={(e) => inputValue(e)}
              />
          </InputContainer>
          <InputContainer>
            <Button
              onClick={async () => {
                setLoading(true);
                setDisable(true);
                setTimeout(async () => {
                const { data } = await
                  client.query({ query: GET_USER_AUTH, variables: { username, password }})
                  .catch(err => {
                      setLoading(false);
                      setDisable(false);
                  });
                console.log(data);
                if(data) {
                  localStorage.setItem('token', data.login.token);
                  sessionDispatch({ type: 'SET_TOKEN', token: data.login.token });
                  window.location.replace('/profile')
                }
              }, 2000)
            }}
            disabled={disabled}
            > { isLoading ? '...' : 'Log In' } </Button>
          </InputContainer>
          <InputContainer>
            <SignInRef onClick={() => setSignIn(!signIn)}> No account? Sign In </SignInRef>
          </InputContainer>
        </FormContainer>
      </RightPanel>
    </LoginStyledContainer>
  </React.Fragment>
  );
};

export default Login;