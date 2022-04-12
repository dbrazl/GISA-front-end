import React, { useRef, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Picker, { OptionType } from '../../../components/Picker';
import { AgeGroup, Associated, AssociatedStatus, HealthCareType } from '../../../models/Associated';
import { ServiceProvider } from '../../../models/ServiceProviders';
import api from '../../../services/api';

import { Container, List, ListItem, LabelListItem, ListButtonContainer, ListButton, EditIcon, ModalName, ModalForm, ModalButton } from './styles';

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

const ServiceProviders: React.FC = () => {
  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Associated | ServiceProvider | null>(DEFAULT_ASSOCIATED);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalFormRef = useRef();

  useEffect(() => {
    async function getServiceProviders(): Promise<void> {
      try {
        const response = await api.get('/serviceProviders');
        setServiceProviders(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getServiceProviders();
  }, []);

  function handleListItemClick(target: Associated | ServiceProvider): void {
    setShowModal(true)
    setSelectedProfile(target);
  }

  function renderServiceProvider(provider: ServiceProvider): React.ReactElement {
    return (
      <ListItem>
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

  function handleModalFormSubmit(data: Associated | ServiceProvider): void {
    if (selectedProfile) {
      console.log('EDIT');
    } else {
      console.log('CREATE');
    }
  }

  function onCloseModal(): void {
    setShowModal(false);
    setSelectedProfile(null);
  }

  return (
    <Container>
      <Header />
      <List>
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
            <Picker name="status" items={PROVIDER_STATUS} />
            <ModalButton>Salvar</ModalButton>
          </ModalForm>
        </Modal>
        : null}
    </Container>
  );
}

export default ServiceProviders;