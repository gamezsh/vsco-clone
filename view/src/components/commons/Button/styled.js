import styled from 'styled-components';

const Button = styled.button`
  background: black;
  /*border-radius: 3px;*/
  border: 1px solid black;
  color: white;
  padding: 0.50em;
  width: 100%;
  cursor: pointer;
  height: 40px;
  font-size: 18px;
  &:focus {
    outline: 0;
  };
  &:hover {
    background: transparent;
    color: black;
  }
`;

export default Button;