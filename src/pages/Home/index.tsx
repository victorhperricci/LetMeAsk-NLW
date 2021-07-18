import IllustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import GoogleImg from "../../assets/images/google-icon.svg";

import { Container, Aside, Main } from "./style";

export function Home() {
  return (
    <Container>
      <Aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={GoogleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </Main>
    </Container>
  );
}
