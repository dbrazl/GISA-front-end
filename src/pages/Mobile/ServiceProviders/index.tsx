import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddButton from '../../../components/AddButton';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Picker, { OptionType } from '../../../components/Picker';
import { AssociatedStatus } from '../../../models/Associated';
import { ProviderStatus, ServiceProvider } from '../../../models/ServiceProviders';
import api from '../../../services/api';

import {
  Container,
  List,
  ListItem,
  LabelListItem,
  ListButtonContainer,
  ListButton,
  EditIcon,
  ModalName,
  ModalForm,
  ModalButton,
  ListHeader,
  ButtonsContainer
} from './styles';

const DEFAULT_SERVICE_PROVIDER: ServiceProvider = {
  id: 1,
  name: 'Nome padrão',
  address: 'Endereço qualquer',
  academicFormation: 'Profissão qualquer',
  convened: 'Hospital Santa Maria',
  status: ProviderStatus.ACTIVE,
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

const ServiceProviders: React.FC = () => {
  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<ServiceProvider | null>(DEFAULT_SERVICE_PROVIDER);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalFormRef = useRef();

  useEffect(() => {
    getServiceProviders();
  }, []);

  async function getServiceProviders(): Promise<void> {
    try {
      const response = await api.get('/serviceProviders');
      setServiceProviders(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleListItemClick(target: ServiceProvider): void {
    setShowModal(true)
    setSelectedProfile(target);
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

  async function handleModalFormSubmit(data: ServiceProvider): Promise<void> {
    if (selectedProfile) {
      await api.put(`/serviceProviders/${selectedProfile.id}`, data);
      await getServiceProviders();
    } else {
      await api.post(`/serviceProviders`, data);
      await getServiceProviders();
    }

    setShowModal(false);
    setSelectedProfile(null);
  }

  function onCloseModal(): void {
    setShowModal(false);
    setSelectedProfile(null);
  }

  function addServiceProvidersAction() {
    setSelectedProfile(null);
    setShowModal(true);
  }


  return (
    <Container>
      <Header />
      <List>
        <ButtonsContainer>
          <AddButton label="Adicionar associado" onClick={addServiceProvidersAction} />
        </ButtonsContainer>
        <ListHeader>
          <LabelListItem>Nome</LabelListItem>
          <LabelListItem style={{ paddingLeft: '10px' }}>Formação</LabelListItem>
          <LabelListItem>Ações</LabelListItem>
        </ListHeader>
        {serviceProviders.map(renderServiceProvider)}
      </List>
      {showModal ? 
        <Modal
          onCloseModal={() => onCloseModal()}
        >
          <ModalName>Edição de cadatro</ModalName>
          <ModalForm
            initialData={selectedProfile ? selectedProfile : {}}
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
            <Input
              name="convened"
              placeholder="Conveniado com a empresa"
            />
            <Picker name="status" label="Status" items={PROVIDER_STATUS} />
            <ModalButton>Salvar</ModalButton>
          </ModalForm>
        </Modal>
        : null}
    </Container>
  );
}

export default ServiceProviders;