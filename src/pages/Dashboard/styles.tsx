import styled from 'styled-components';
import { FiLogOut, FiEdit2 } from 'react-icons/fi';
import { Form } from '@unform/web';

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

  &:hover, &.selected {
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

export const List = styled.ul`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 30px;

  & + & {
    margin-top: 10px;
  }
`;

export const LabelListItem = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
  margin: auto 0;
`;

export const ListButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListButton = styled.button`
  background-color: transparent;
`;

export const EditIcon = styled(FiEdit2)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalName = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.subtitle};
  font-weight: bold;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;

  select {
    margin-top: 20px;
  }
`;

export const ModalButton = styled.button`
  height: 45px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 20px;
`;

