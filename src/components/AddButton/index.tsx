import React from 'react';

import { Container, Label, PlusIcon } from './styles';

type AddButtonType = {
  label: string;
  onClick?: Function;
};

const AddButton: React.FC<AddButtonType> = ({ label, onClick = () => {} }) => {
  return (
    <Container onClick={() => onClick()}>
      <PlusIcon />
      <Label>{label}</Label>
    </Container>
  );
}

export default AddButton;