import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  width: 100%;
  padding: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sizes.minorDesktop + theme.breakpoints.unit}) {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.big};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Form = styled(UnformForm)`
  margin-top: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 250px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-weight: bold;
`;