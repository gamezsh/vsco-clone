import React, { createContext, useReducer, useState } from 'react';
import { GET_USER_INFO } from '../gql/authUserInfo';
import { useApolloClient } from '@apollo/react-hooks';

const initialState = {
  userId: '',
  name: '',
  last_name: '',
  phone: '',
  email: ''
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_USER_INFO':
      return  {
        ...state,
        ...action.user.me
      }
    default:
      return state;
  }
}

const UserContext = createContext(initialState);

const UserContextProvider = props => {

  const client = useApolloClient();
  const [userState, userDispatch] = useReducer(reducer, initialState);
  const [loadingImg, setLoading] = useState(false);

  useState(() => {

    async function fetchContext() {
      const { data, loading } = await client.query({ query: GET_USER_INFO });
      await setTimeout(async () => {
        await userDispatch({ type: 'GET_USER_INFO', user: data });
        if(loading) setLoading(true)
      }, 0)
      if(!loading) setLoading(false)
    }
    fetchContext();
  })

  return (
    <UserContext.Provider value={{ user: userState, loadingImg, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };