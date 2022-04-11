import React from 'react';

import { Container, Main } from './styles';

type ModalType = {
  onCloseModal: Function;
  children: React.ReactElement | React.ReactElement[];
};

const Modal: React.FC<ModalType> = ({ onCloseModal, children }) => {
  return (
    <>
      <Container onClick={() => onCloseModal()}>
      </Container>
      <Main>
        {children}
      </Main>
    </>
  );
}

export default Modal;