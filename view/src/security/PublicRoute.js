import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { sessionState }  = useContext(SessionContext);
  return (
    <React.Fragment>
      <Route
        {...rest}
        render = { props => sessionState.accessToken ? <Redirect to={{ pathname: '/feed' }} /> : <Component {...props} />  }
      />
    </React.Fragment>
  );
};

export default PublicRoute;