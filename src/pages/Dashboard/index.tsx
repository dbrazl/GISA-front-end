import React, { useEffect, useState } from 'react';
import { Associated } from '../../models/Associated';
import api from '../../services/api';

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
  List,
  ListItem,
  LabelListItem,
 } from './styles';

const Dashboard: React.FC = () => {
  const [selectedSideMenu, setSelectedSideMenu] = useState<string>();
  const [associateds, setAssociateds] = useState<Associated[]>([]);

  async function getAssociateds(): Promise<void> {
    try {
      const response = await api.get('/associateds');
      setAssociateds(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAssociatedsSelected(): Promise<void> {
    setSelectedSideMenu('Associados');
    await getAssociateds();
  }

  function renderAssociated(associated: Associated): React.ReactElement {
    return (
      <ListItem>
        <LabelListItem>{associated.name}</LabelListItem>
        <LabelListItem>{associated.healthCareType}</LabelListItem>
      </ListItem>
    );
  }

  function getPageContent(): React.ReactElement | React.ReactElement[] {
    switch(selectedSideMenu) {
      case 'Associados':
        return associateds.map(renderAssociated);

      default:
        return <></>
    }
  }

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
            onClick={() => handleAssociatedsSelected()}
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
        <List>
          {getPageContent()}
        </List>
      </Content>
    </Container>
  );
}

export default Dashboard;