import { Container } from "./styles";

export function Card({ image, title, description }) {
  return (
    <Container>
      <img src={image} alt="" />
      
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
}
