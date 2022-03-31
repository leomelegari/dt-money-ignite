import IncomeImg from "../../assets/entradas.svg";
import OutcomeImg from "../../assets/saídas.svg";
import Total from "../../assets/total.svg"

import { Container } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={OutcomeImg} alt="Entradas" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Entradas</p>
          <img src={Total} alt="Entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
};
