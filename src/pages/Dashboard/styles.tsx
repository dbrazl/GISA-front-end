import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const Header = styled.header`
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

export const Content = styled.section`
  display: flex;
  width: 100%;
  height: calc(100% - 50px);
`;

export const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  margin-top: 30px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sizes.minorDesktop + theme.breakpoints.unit}) {
    width: 400px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 0;
  }
`;

export const ModuleName = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.subtitle};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  padding-left: 20px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuOption = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.label};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black};
  height: 40px;
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid ${({ theme }) => theme.colors.blue};

  transition: all 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Version = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.label};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: 20px;
  line-height: 20px;
`;