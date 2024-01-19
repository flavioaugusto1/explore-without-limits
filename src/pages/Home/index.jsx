import { Container, IconUser, IconEmail } from "./styles";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

import Logo from "../../assets/space.png";
import KeyDown from "../../assets/keyDown.svg";

import Planet1 from "../../assets/planet1.png";
import Planet2 from "../../assets/planet2.png";
import Planet3 from "../../assets/planet3.png";

export function Home() {
  return (
    <Container>
      <section className="content initial-content">
        <img src={Logo} alt="imagem de um astronauta com planetas ao redor" />
        <div className="titles">
          <div>
            <h1>Explore sem limites</h1>
            <p>Porque o aprendizado é contínuo</p>
          </div>
          <img src={KeyDown} alt="imagem de uma seta apontando para baixo" />
        </div>
      </section>

      <section className="cards">
        <div className="content flex-cards">
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
        </div>
      </section>

      <section className="form-content content">
        <h1>Entre em contato</h1>
        <form>
          <div className="input-form">
            <IconUser />
            <label htmlFor="name-user">Seu nome</label>
            <Input
              type="text"
              placeholder="Seu nome"
              id="name-user"
              name="name-user"
            />
          </div>

          <div className="input-form">
            <IconEmail />
            <label htmlFor="email-user">Seu Email</label>
            <Input
              type="email"
              placeholder="Email"
              id="email-user"
              name="email-user"
            />
          </div>

          <textarea
            placeholder="Digite sua mensagem aqui..."
            className="input-form"
          />

          <button type="button">Enviar Mensagem</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 - fladev</p>
      </footer>
    </Container>
  );
}
