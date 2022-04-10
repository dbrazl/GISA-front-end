import React from 'react';

import {
  Container,
  Content,
  ExitIcon,
  Header,
  HeaderMenu,
  Label,
  SideMenu,
  MenuOption,
  ModuleName,
  Version,
 } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderMenu>
          <Label>sair</Label>
          <ExitIcon />
        </HeaderMenu>
      </Header>
      <Content>
        <SideMenu>
          <ModuleName>MIC</ModuleName>
          <MenuOption>Associados</MenuOption>
          <MenuOption>Prestadores</MenuOption>
          <Version>versão<br/>0.1.0</Version>
        </SideMenu>
      </Content>
    </Container>
  );
}

export default Dashboard;