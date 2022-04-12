import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.greyMedium};
`;

export const HeaderMenu = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
`;

export const ExitIcon = styled(FiLogOut)`
  margin-left: 10px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
