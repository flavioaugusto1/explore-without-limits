import styled from "styled-components";
import { RiUser3Fill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const Container = styled.main`
  height: 100vh;

  .content {
    padding: 0 4rem;
    width: min(140rem, 100%);
    margin: 0 auto;
  }

  .initial-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 9.3rem;

    img {
      width: 32rem;
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
    padding-top: 5.2rem;
    padding-bottom: 5.2rem;

    .flex-cards {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
  }

  .form-content {
    margin: 7.8rem auto 6.5rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    h1 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 4.2rem;
    }

    label {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .input-form {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      border: 1.5px solid ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 1.6rem;
      padding: 1.2rem 1.6rem;
    }

    textarea {
      resize: none;
      height: 9.8rem;
      outline: none;
    }

    button {
      padding: 1.6rem;
      border-radius: 1.6rem;
      border: none;

      background: ${({ theme }) => theme.COLORS.PURPLE_LINEAR};
      color: ${({ theme }) => theme.COLORS.WHITE};

      max-width: 14rem;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  footer {
    text-align: center;
    padding: 1.6rem;

    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.PURPLE_LINEAR};
  }

  @media (min-width: 1023px) {
    .initial-content {
      flex-direction: row-reverse;
      justify-content: space-between;
      img {
        width: 72rem;
        height: 73rem;
      }

      .titles {
        align-items: flex-start;
        img {
          margin-top: 18rem;
        }
      }
    }
    .cards .flex-cards,
    .form-content {
      flex-direction: row;
    }
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

export const IconUser = styled(RiUser3Fill)`
  width: 2.4rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const IconEmail = styled(MdOutlineAlternateEmail)`
  width: 2.4rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.PINK};
`;
