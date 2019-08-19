import React, { createContext, useReducer  } from 'react';

const initialState = {
  accessToken: !localStorage.getItem('token') ? '' : localStorage.getItem('token'),
  expires: '',
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_TOKEN':
      return { ...state, accessToken: action.token };
    case 'SET_AUTH_INFO':
      return { ...state, ...action.auth };
    default: 
      return state;
  }
};

const SessionContext = createContext(initialState);

const SessionContextProvider = props => {

  const [sessionState, sessionDispatch] = useReducer(reducer, initialState);

  return (
    <SessionContext.Provider value={{ sessionState, sessionDispatch }}>
      {props.children}
    </SessionContext.Provider>
  );
}

export { SessionContextProvider, SessionContext };