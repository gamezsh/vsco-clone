import React, { useContext, useEffect, useState} from 'react';
import { 
  NavbarContainer,
  NavbarButtons,
  NavbarSearch,
  LogoutButton
} from './styled';
import { UserContext } from '../../../context/UserContext';
import { SessionContext } from '../../../context/SessionContext';

function Navbar(props) {
  const { user } = useContext(UserContext);
  const { sessionDispatch } = useContext(SessionContext);
  const [logging, isLogging] = useState(false);
  const logOff = () => {
    isLogging(true);
    setTimeout(() => {
      sessionDispatch({ type: 'SET_TOKEN', token: '' })
      localStorage.removeItem('token');
      isLogging(false);
    }, 2000);
  }

  return (
    <div>
      <NavbarContainer>
        <NavbarSearch>
          <p style={{ 'marginLeft': '100px'}}> {user.username} </p>
        </NavbarSearch>
        <NavbarButtons>
          <LogoutButton> <a style={{textDecoration: 'none', color: 'black'}} href="/feed"> Feed </a> </LogoutButton>
          { !logging ? <LogoutButton onClick={() => logOff()}> Log Off </LogoutButton> : <LogoutButton> ... </LogoutButton>} 
        </NavbarButtons>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;