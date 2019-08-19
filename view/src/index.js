import "core-js/stable";
import "regenerator-runtime/runtime";
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { SessionContextProvider } from './context/SessionContext';
import { UserContextProvider } from './context/UserContext';
import { PrivateRoute, PublicRoute } from './security';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { User } from './components/User';
import { NotFound } from "./components/commons";
import { Feed } from "./components/Feed";
import history from './history';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink, httpLink
  ]), 
  cache: new InMemoryCache()
});

const ComposedRoutes = () => {
  return (
    <Router history={history}>
      <SessionContextProvider>
        <UserContextProvider>
          <React.Fragment>
            <Switch>    
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/user/:username" component={User} />
              <PrivateRoute path="/feed" component={Feed} />
              <Route path="/**" component={NotFound} />
            </Switch>
          </React.Fragment>
        </UserContextProvider>
      </SessionContextProvider>
    </Router>
  );
};

const App = () => {
  return <ComposedRoutes />;
};

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById("app"));