import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  cursor: pointer;
`;

export const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  width: calc(100% - 10%);
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sizes.minorDesktop + theme.breakpoints.unit}) {
    width: 400px;
  }
`;
