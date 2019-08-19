import styled from 'styled-components';

const StyledInput = styled.input`
  background: transparent;
  /*border-radius: 3px;*/
  border: 1px solid ${props => props.error ? 'red' : 'black'};
  color: ${props => props.error ? 'red' : 'black' };
  padding: 0.50em;
  width: 100%;
  height: 40px;
  cursor: text;
  font-size: 18px;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  };
`;

export default StyledInput;