import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Picker, { OptionType } from '../../components/Picker';
import { AgeGroup, Associated, AssociatedStatus, HealthCareType } from '../../models/Associated';
import { ServiceProvider } from '../../models/ServiceProviders';
import api from '../../services/api';

import {
  Container,
  Content,
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
  ModalName,
  ModalForm,
  ModalButton,
  ListHeader,
 } from './styles';

const DEFAULT_ASSOCIATED: Associated = {
  name: 'Nome padrão',
  address: 'Endereço qualquer',
  academicFormation: 'Profissão qualquer',
  ageGroup: AgeGroup.AGE_20_A_30,
  dentalMedicalPlan: false,
  healthCare: AssociatedStatus.ACTIVE,
  healthCareType: HealthCareType.INFIRMARY,
  healthInfo: {
    medicalAppointments: 0,
    medicalExams: 0,
    coverage: ['Todos os exames básicos']
  }
};

const PROVIDER_STATUS: OptionType[] = [
  {
    label: 'Ativo',
    value: AssociatedStatus.ACTIVE,
  },
  {
    label: 'Inativo',
    value: AssociatedStatus.INACTIVE,
  },
];

const ASSOCIATED_STATUS: OptionType[] = [
  {
    label: 'Ativo',
    value: AssociatedStatus.ACTIVE,
  },
  {
    label: 'Inativo',
    value: AssociatedStatus.INACTIVE,
  },
  {
    label: 'Suspenso',
    value: AssociatedStatus.SUSPENDED,
  }
];

const AGE_GROUP: OptionType[] = [
  {
    label: AgeGroup.AGE_0_A_10.toLocaleLowerCase(),
    value: AgeGroup.AGE_0_A_10,
  },
  {
    label: AgeGroup.AGE_10_A_20.toLocaleLowerCase(),
    value: AgeGroup.AGE_10_A_20,
  },
  {
    label: AgeGroup.AGE_20_A_30.toLocaleLowerCase(),
    value: AgeGroup.AGE_20_A_30,
  },
  {
    label: AgeGroup.AGE_30_A_40.toLocaleLowerCase(),
    value: AgeGroup.AGE_30_A_40,
  },
  {
    label: AgeGroup.AGE_40_A_50.toLocaleLowerCase(),
    value: AgeGroup.AGE_40_A_50,
  },
  {
    label: AgeGroup.AGE_50_A_60.toLocaleLowerCase(),
    value: AgeGroup.AGE_50_A_60,
  },
  {
    label: AgeGroup.AGE_60_PLUS.toLocaleLowerCase(),
    value: AgeGroup.AGE_60_PLUS,
  },
];

const HEALTH_CARE_TYPE: OptionType[] = [
  {
    label: 'Apartamento',
    value: HealthCareType.APARTMENT,
  },
  {
    label: 'Enfermaria',
    value: HealthCareType.INFIRMARY,
  },
  {
    label: HealthCareType.VIP,
    value: HealthCareType.VIP,
  }
];

const DENTAL_MEDICAL_PLAN: OptionType[] = [
  {
    label: 'Possui',
    value: 'true',
  },
  {
    label: 'Não possui',
    value: 'false',
  },
];

const DESKTOP_RESOLUTION: number = 1024;

const Dashboard: React.FC = () => {
  const [selectedSideMenu, setSelectedSideMenu] = useState<string>();
  const [associateds, setAssociateds] = useState<Associated[]>([]);
  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Associated | ServiceProvider | null>(DEFAULT_ASSOCIATED);
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const modalFormRef = useRef();
  const navigate = useNavigate();

  async function getAssociateds(): Promise<void> {
    try {
      const response = await api.get('/associateds');
      setAssociateds(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAssociatedsSelected(): Promise<void> {
    if (window.screen.width < DESKTOP_RESOLUTION) {
      navigate('associateds');
    } else {
      setSelectedSideMenu('Associados');
      await getAssociateds();
    }
  }

  function handleListItemClick(target: Associated | ServiceProvider): void {
    setShowModal(true)
    setSelectedProfile(target);
  }

  function renderAssociated(associated: Associated): React.ReactElement {
    return (
      <ListItem key={uuidv4()}>
        <LabelListItem>{associated.name}</LabelListItem>
        <LabelListItem>{associated.healthCareType}</LabelListItem>
        <ListButtonContainer>
          <ListButton onClick={() => handleListItemClick(associated)}>
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
    if (window.screen.width < DESKTOP_RESOLUTION) {
      navigate('providers');
    } else {
      setSelectedSideMenu('Prestadores');
      await getServiceProviders();
    }
  }

  function renderServiceProvider(provider: ServiceProvider): React.ReactElement {
    return (
      <ListItem key={uuidv4()}>
        <LabelListItem>{provider.name}</LabelListItem>
        <LabelListItem>{provider.academicFormation}</LabelListItem>
        <ListButtonContainer>
          <ListButton onClick={() => handleListItemClick(provider)}>
            <EditIcon />
          </ListButton>
        </ListButtonContainer>
      </ListItem>
    );
  }

  function getListHeader(): React.ReactElement | React.ReactElement[] {
    switch(selectedSideMenu) {
      case 'Associados':
        return (
          <ListHeader>
            <LabelListItem>Nome</LabelListItem>
            <LabelListItem style={{ paddingLeft: '10px' }}>Plano de saúde</LabelListItem>
            <LabelListItem>Ações</LabelListItem>
          </ListHeader>
        );

      case 'Prestadores':
        return (
          <ListHeader>
            <LabelListItem>Nome</LabelListItem>
            <LabelListItem style={{ paddingLeft: '10px' }}>Formação</LabelListItem>
            <LabelListItem>Ações</LabelListItem>
          </ListHeader>
        );

      default:
        return <></>;
    }
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

  function isServiceProvider(prof: Associated | ServiceProvider | null): prof is ServiceProvider {
    if (prof) {
      return (prof as ServiceProvider).convened !== undefined;
    }

    return false;

  }

  function handleModalFormSubmit(data: Associated | ServiceProvider): void {
    if (selectedProfile) {
      console.log('EDIT');
    } else {
      console.log('CREATE');
    }
  }

  function getIntialDataForm() {
    if (selectedProfile) {
      return {
        ...selectedProfile,
        ...((selectedProfile as Associated)?.healthInfo || [])
      };
    }

    return {};
  }

  return (
    <Container>
      <Header />
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
          {getListHeader()}
          {getPageContent()}
        </List>
      </Content>
      {showModal ? 
        <Modal
          onCloseModal={() => setShowModal(false)}
        >
          <ModalName>Edição de cadatro</ModalName>
          <ModalForm
            initialData={getIntialDataForm()}
            ref={modalFormRef as any}
            onSubmit={handleModalFormSubmit}
          >
            <Input
              name="name"
              placeholder="Nome"
            />
            <Input
              name="address"
              placeholder="Endereço"
            />
            <Input
              name="academicFormation"
              placeholder="Formação académica"
            />
            {isServiceProvider(selectedProfile) ? (
              <>
                <Input
                  name="covened"
                  placeholder="Conveniado com a empresa"
                />
                <Picker name="status" items={PROVIDER_STATUS} />
              </>
            ) : (
              <>
                <Input
                  name="medicalAppointments"
                  placeholder="Número de consultas médicas"
                />
                <Input
                  name="medicalExams"
                  placeholder="Número de exames"
                />
                <Picker name="healthCare" items={ASSOCIATED_STATUS} />
                <Picker name="ageGroup" items={AGE_GROUP} />
                <Picker name="healthCareType" items={HEALTH_CARE_TYPE} />
                <Picker name="dentalMedicalPlan" items={DENTAL_MEDICAL_PLAN} />
              </>
            )}
            <ModalButton>Salvar</ModalButton>
          </ModalForm>
        </Modal>
        : null}
    </Container>
  );
}

export default Dashboard;