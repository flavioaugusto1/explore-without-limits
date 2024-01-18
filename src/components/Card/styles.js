import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 2.6rem;
  border-radius: 2rem;

  img {
    margin-bottom: 3.2rem;
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    margin-top: 2rem;

    font-size: 1.6rem;
  }
`;
