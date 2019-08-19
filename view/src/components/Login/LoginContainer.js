import React, { useState, useContext } from 'react';
import { GET_USER_AUTH } from '../.././gql/auth.gql';
import Login from './Login';
import { formFields, ffields } from './form';

import { SessionContext } from '../../context/SessionContext';

const LoginContainer = props => {

  const { sessionState, sessionDispatch } = useContext(SessionContext);
  const [isLoading, setLoading] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [fields, setField] = useState(ffields);

  const inputValue = e => {
    const { name, value } = e.target;
    setField({...fields, [name]: value })
  }

  return (
    <Login
      sessionState={sessionState}
      sessionDispatch={sessionDispatch}
      ffields={fields}
      fields={formFields}
      gqlAuth={GET_USER_AUTH}
      inputValue={inputValue}
      isLoading={isLoading}
      setLoading={setLoading}
      disabled={disabled}
      setDisable={setDisable}
      signIn={signIn}
      setSignIn={setSignIn}
      {...props}
    />
  );
};

export default LoginContainer;