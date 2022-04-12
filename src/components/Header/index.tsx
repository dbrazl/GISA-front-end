import React from 'react';

import { Container, HeaderMenu, Label, ExitIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderMenu>
        <Label>sair</Label>
        <ExitIcon />
      </HeaderMenu>
    </Container>
  );
}

export default Header;