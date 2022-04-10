import styled from 'styled-components';

export const Field = styled.input`
  width: 100%;
  height: 32px;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};

  & + & {
    margin-top: 20px;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};

    &::placeholder {
      color: ${({ theme }) => theme.colors.blue};
      font-weight: bold;
    }
  }
`;
