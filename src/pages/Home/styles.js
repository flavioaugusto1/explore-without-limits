import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;

  .content {
    padding: 0 4rem;
    width: min(112rem, 100%);
    margin: 0 auto;
  }

  .initial-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 36.4rem;
      height: 37rem;
      margin-bottom: 1.7rem;

      animation-name: topDown;
      animation-duration: 0.8s;
      animation-fill-mode: backwards;
      animation-timing-function: linear;
    }

    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1,
      p {
        text-align: center;
      }

      h1 {
        font-size: 3.2rem;
        margin-bottom: 0.5rem;

        color: ${({ theme }) => theme.COLORS.PINK};
      }

      p {
        font-size: 2rem;
        font-weight: 600;

        margin-bottom: 3.5rem;
      }

      img {
        width: 6rem;
        height: 10rem;

        animation-name: floating;
        animation-duration: 1s;
        animation-fill-mode: backwards;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-delay: 1.2s;
      }
    }
  }

  .cards {
    background: ${({ theme }) => theme.COLORS.PURPLE_LINEAR};
  }

  @keyframes topDown {
    0% {
      transform: translateY(-100%);
    }
  }

  @keyframes floating {
    50% {
      transform: translateY(1rem);
    }
  }
`;
