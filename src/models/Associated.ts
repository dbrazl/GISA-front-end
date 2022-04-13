export type Associated = {
  id: number;
  name: string;
  address: string;
  academicFormation: string;
  healthCare: AssociatedStatus;
  ageGroup: AgeGroup;
  healthCareType: HealthCareType;
  dentalMedicalPlan: boolean;
  healthInfo: HealthInfo;
};

export enum AssociatedStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
};

export enum AgeGroup {
  AGE_0_A_10 = '0 A 10 ANOS',
  AGE_10_A_20 = '10 A 20 ANOS',
  AGE_20_A_30 = '20 A 30 ANOS',
  AGE_30_A_40 = '30 A 40 ANOS',
  AGE_40_A_50 = '40 A 50 ANOS',
  AGE_50_A_60 = '50 A 60 ANOS',
  AGE_60_PLUS = '60+ ANOS',
};

export enum HealthCareType {
  INFIRMARY = 'INFIRMARY',
  APARTMENT = 'APARTMENT',
  VIP = 'VIP',
};

export type HealthInfo = {
  medicalAppointments: number;
  medicalExams: number;
  coverage: string[];
};