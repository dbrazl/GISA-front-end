import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 32px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.font.sizes.label};
  color: ${({ theme }) => theme.colors.black};
`;
