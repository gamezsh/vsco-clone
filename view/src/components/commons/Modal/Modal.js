import React from 'react';
import { StyledModal, StyledModalBox  } from './styled';

const Modal = props => {
  return ( 
    <StyledModal>
      <StyledModalBox>
        { props.children }
      </StyledModalBox>
    </StyledModal>
  );
}

export default Modal;