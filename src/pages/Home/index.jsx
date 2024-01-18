import { Container } from "./styles";
import { Card } from "../../components/Card";

import Logo from "../../assets/space.png";
import KeyDown from "../../assets/keyDown.svg";

import Planet1 from "../../assets/planet1.png";
import Planet2 from "../../assets/planet2.png";
import Planet3 from "../../assets/planet3.png";

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

        <Card
          image={Planet2}
          title="Só volta"
          description="Se você parou ou perdeu o ritmo em alguma atividade ou projeto, saiba que nunca é tarde para recomeçar. Às vezes, as circunstâncias podem mudar, ou podemos nos sentir desmotivados ou sobrecarregados."
        />

        <Card
          image={Planet3}
          title="Siga seu ritmo"
          description="Avançar pouco a pouco mantém progresso constante em objetivos, evitando parar ou desistir. Mesmo pequenos passos nos aproximam do destino e motivam a continuidade. Não subestime o poder de cada ação rumo ao objetivo final."
        />
      </section>
    </Container>
  );
}
