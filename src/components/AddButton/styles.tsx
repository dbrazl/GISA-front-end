import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PlusIcon = styled(FiPlus)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.label};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black};
`;