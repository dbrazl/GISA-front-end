import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddButton from '../../../components/AddButton';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Picker, { OptionType } from '../../../components/Picker';
import { AgeGroup, Associated, AssociatedStatus, HealthCareType } from '../../../models/Associated';
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

const DEFAULT_ASSOCIATED: Associated = {
  id: 1,
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

const Associateds: React.FC = () => {
  const [associateds, setAssociateds] = useState<Associated[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Associated | null>(DEFAULT_ASSOCIATED);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalFormRef = useRef();

  useEffect(() => {
    getAssociateds();
  }, []);

  async function getAssociateds(): Promise<void> {
    try {
      const response = await api.get('/associateds');
      setAssociateds(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleListItemClick(target: Associated): void {
    setShowModal(true)
    setSelectedProfile(target);
  }

  function getHealthCareType(healthCareType: string): string {
    switch(healthCareType) {
      case HealthCareType.APARTMENT:
        return 'Apartamento';

      case HealthCareType.INFIRMARY:
        return 'Enfermaria';

      case HealthCareType.VIP:
        return 'VIP';

      default:
        return '';
    }
  }

  function renderAssociated(associated: Associated): React.ReactElement {
    return (
      <ListItem key={uuidv4()}>
        <LabelListItem>{associated.name}</LabelListItem>
        <LabelListItem>{getHealthCareType(associated.healthCareType)}</LabelListItem>
        <ListButtonContainer>
          <ListButton onClick={() => handleListItemClick(associated)}>
            <EditIcon />
          </ListButton>
        </ListButtonContainer>
      </ListItem>
    );
  }

  async function handleModalFormSubmit(data: Associated): Promise<void> {
    if (selectedProfile) {
      const schema  = copyObj(data);
      delete schema.medicalAppointments;
      delete schema.medicalExams;
      schema.healthInfo = selectedProfile.healthInfo;

      await api.put(`/associateds/${selectedProfile.id}`, schema);
      await getAssociateds();
    } else {
      await api.post(`/associateds`, data);
      await getAssociateds();
    }

    setShowModal(false);
    setSelectedProfile(null);
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

  function onCloseModal(): void {
    setShowModal(false);
    setSelectedProfile(null);
  }

  function addAssociatedAction() {
    setSelectedProfile(null);
    setShowModal(true);
  }

  function copyObj(obj: any): any {
    return JSON.parse(JSON.stringify(obj));;
  }

  return (
    <Container>
      <Header />
      <List>
        <ButtonsContainer>
          <AddButton label="Adicionar associado" onClick={addAssociatedAction}/>
        </ButtonsContainer>
        <ListHeader>
          <LabelListItem>Nome</LabelListItem>
          <LabelListItem style={{ paddingLeft: '10px' }}>Plano de saúde</LabelListItem>
          <LabelListItem>Ações</LabelListItem>
        </ListHeader>
        {associateds.map(renderAssociated)}
      </List>
      {showModal ? 
        <Modal
          onCloseModal={() => onCloseModal()}
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
            <Input
              name="medicalAppointments"
              placeholder="Número de consultas médicas"
            />
            <Input
              name="medicalExams"
              placeholder="Número de exames"
            />
            <Picker name="healthCare" label="Plano de saúde" items={ASSOCIATED_STATUS} />
            <Picker name="ageGroup" label="Faixa etária" items={AGE_GROUP} />
            <Picker name="healthCareType" label="Tipo de plano de saúde" items={HEALTH_CARE_TYPE} />
            <Picker name="dentalMedicalPlan" label="Plano médico-odontológico" items={DENTAL_MEDICAL_PLAN} />
            <ModalButton>Salvar</ModalButton>
          </ModalForm>
        </Modal>
        : null}
    </Container>
  );
}

export default Associateds;