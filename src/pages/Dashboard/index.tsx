import React, { useEffect, useState } from 'react';
import { Associated } from '../../models/Associated';
import { ServiceProvider } from '../../models/ServiceProviders';
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
  ListButtonContainer,
  EditIcon,
  ListButton,
 } from './styles';

const Dashboard: React.FC = () => {
  const [selectedSideMenu, setSelectedSideMenu] = useState<string>();
  const [associateds, setAssociateds] = useState<Associated[]>([]);
  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);

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
        <ListButtonContainer>
          <ListButton>
            <EditIcon />
          </ListButton>
        </ListButtonContainer>
      </ListItem>
    );
  }

  async function getServiceProviders(): Promise<void> {
    try {
      const response = await api.get('/serviceProviders');
      setServiceProviders(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleServiceProvidersSelected(): Promise<void> {
    setSelectedSideMenu('Prestadores');
    await getServiceProviders();
  }

  function renderServiceProvider(provider: ServiceProvider): React.ReactElement {
    return (
      <ListItem>
        <LabelListItem>{provider.name}</LabelListItem>
        <LabelListItem>{provider.academicFormation}</LabelListItem>
        <ListButtonContainer>
          <ListButton>
            <EditIcon />
          </ListButton>
        </ListButtonContainer>
      </ListItem>
    );
  }

  function getPageContent(): React.ReactElement | React.ReactElement[] {
    switch(selectedSideMenu) {
      case 'Associados':
        return associateds.map(renderAssociated);

      case 'Prestadores':
        return serviceProviders.map(renderServiceProvider);

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
            onClick={() => handleServiceProvidersSelected()}
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