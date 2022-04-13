import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.greyLight};
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  position: sticky;
  inset: 0;
`;

export const List = styled.ul`
  padding: 0 20px;
  padding-bottom: 20px;
  width: 100%;
  height: calc(100% - 50px);
  overflow: scroll;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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