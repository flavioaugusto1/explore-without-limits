import { Container } from "./styles";
import { Card } from "../../components/Card";

import Logo from "../../assets/space.png";
import KeyDown from "../../assets/keyDown.svg";

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

      <section className="cards">
        <Card />
      </section>
    </Container>
  );
}
