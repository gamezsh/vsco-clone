import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';
import { Navbar } from '../components/commons';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { sessionState }  = useContext(SessionContext);
  return (
    <React.Fragment>
      <Navbar />
      <Route
        {...rest}
        render = { props => sessionState.accessToken ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} /> }
      />
    </React.Fragment>
  );
};
export default PrivateRoute;