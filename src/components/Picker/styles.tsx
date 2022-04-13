import styled from 'styled-components';

export const Container = styled.div``;

export const Select = styled.select`
  width: 100%;
  height: 32px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
`;


export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;