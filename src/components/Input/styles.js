import styled from "styled-components";

export const Container = styled.input`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PURPLE};
  border: none;
  outline: none;
  width: 100%;

  ::placeholder {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;
