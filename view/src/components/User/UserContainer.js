import React, { useContext } from 'react';
import User from './User';
import { useApolloClient } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import { GET_PROFILE_INFO } from '../../gql/userInfo';
import { UserContext } from '../../context/UserContext';

const UserContainer = props => {
  const { user } = useContext(UserContext);
  const client = useApolloClient();
  const [userProfile, setUser] = React.useState({})

  React.useEffect(() => {
    async function fetchUser() {
    const { data } = await client.query({ 
      query: GET_PROFILE_INFO, 
      variables: {
        username: props.match.params.username
      }});
      setUser(data.user);
    }
    fetchUser();
  }, []);

  return (
    <React.Fragment>
      {user.username !== props.match.params.username ? 
        <User
          user={userProfile}
          {...props} 
        /> : <Redirect to={{ pathname: '/profile' }} />
      }
    </React.Fragment>
  );
}

export default UserContainer;