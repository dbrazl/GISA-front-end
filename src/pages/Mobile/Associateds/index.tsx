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
  const [selectedProfile, setSelectedProfile] = useState<Associated | ServiceProvider>(DEFAULT_ASSOCIATED);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalFormRef = useRef();

  useEffect(() => {
    async function getAssociateds(): Promise<void> {
      try {
        const response = await api.get('/associateds');
        setAssociateds(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getAssociateds();
  }, []);

  function handleListItemClick(target: Associated | ServiceProvider): void {
    setShowModal(true)
    setSelectedProfile(target);
  }

  function renderAssociated(associated: Associated): React.ReactElement {
    return (
      <ListItem>
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

  function isServiceProvider(prof: Associated | ServiceProvider): prof is ServiceProvider {
    return (prof as ServiceProvider).convened !== undefined;
  }


  function handleModalFormSubmit(data: Associated | ServiceProvider): void {
    console.log(data);
  }

  function getIntialDataForm() {
    return {
      ...selectedProfile,
      ...((selectedProfile as Associated)?.healthInfo || [])
    };
  }

  return (
    <Container>
      <Header />
      <List>
        {associateds.map(renderAssociated)}
      </List>
      {showModal ? 
        <Modal
          onCloseModal={() => setShowModal(false)}
        >
          <ModalName>Edição de cadatro</ModalName>
          <ModalForm initialData={getIntialDataForm()} ref={modalFormRef as any} onSubmit={handleModalFormSubmit}>
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

export default Associateds;