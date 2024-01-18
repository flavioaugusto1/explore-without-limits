import { Container } from "./styles";
import { Card } from "../../components/Card";

import Logo from "../../assets/space.png";
import KeyDown from "../../assets/keyDown.svg";

import Planet1 from "../../assets/planet1.png";

export function Home() {
  return (
    <Container>
      <section className="content initial-content">
        <img src={Logo} alt="" />
        <div className="titles">
          <h1>Explore sem limites</h1>
          <p>Porque o aprendizado é contínuo</p>
          <img src={KeyDown} alt="" />
        </div>
      </section>

      <section className="content cards">
        <Card
          image={Planet1}
          title="Não pare nunca"
          description='Se você deseja ter sucesso nos estudos, é fundamental que você adote uma mentalidade de "não pare nunca". Estudar de forma consistente e contínua é a chave para o progresso e a conquista de seus objetivos.'
        />
      </section>
    </Container>
  );
}
