import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
};
