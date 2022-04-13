export type ServiceProvider = {
  id: number;
  name: string;
  address: string;
  academicFormation: string;
  convened: string;
  status: ProviderStatus;
};

export enum ProviderStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}