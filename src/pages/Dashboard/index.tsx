import React, { useState } from 'react';

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
  const [selectedSideMenu, setSelectedSideMenu] = useState<string>();

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
          <MenuOption
            className={selectedSideMenu === 'Associados' ? 'selected' : ''}
            onClick={() => setSelectedSideMenu('Associados')}
          >
              Associados
          </MenuOption>
          <MenuOption
            className={selectedSideMenu === 'Prestadores' ? 'selected' : ''}
            onClick={() => setSelectedSideMenu('Prestadores')}
          >
              Prestadores
          </MenuOption>
          <Version>versão<br/>0.1.0</Version>
        </SideMenu>
      </Content>
    </Container>
  );
}

export default Dashboard;