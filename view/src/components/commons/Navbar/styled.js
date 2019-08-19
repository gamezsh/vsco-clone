import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  /* border-bottom: 0.1px solid black;*/ 
  position: fixed;
  display: block;
`;

const NavbarButtons = styled.div`
  position: relative;
  float: right;
  top: 50%;
  margin-right: 100px;
`;

const NavbarSearch = styled.div`
  float:left;
  margin: 0;
  position: relative;
  top: 50%;
`;

const LogoutButton = styled.button`
  border: none;
  outline: none;
  float: left;
  margin-right: 20px;
  font-size: 14px;
  color: #000;
  height: 33%;
  font-weight: 400;
  cursor: pointer;
`;

export {
  NavbarContainer,
  NavbarButtons,
  NavbarSearch,
  LogoutButton
};