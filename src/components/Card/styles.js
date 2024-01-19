import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 2.6rem;
  border-radius: 2rem;

  animation: appears;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;

  img {
    margin-bottom: 3.2rem;

    animation: rotate;
    animation-duration: 20s;
    animation-fill-mode: backwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 2s;
  }

  h2 {
    font-size: clamp(2.8rem, 2.1rem + 0.625vw, 3.5rem);
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    margin-top: 2rem;
    font-size: clamp(1.6rem, 1.486rem + 0.357vw, 2rem);
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes appears {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
