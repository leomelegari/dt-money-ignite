import { useTransactions } from "../../hooks/useTransactions";
import { Container, ContainerEmpty } from "./styles";
import { VscEmptyWindow } from "react-icons/vsc";

export const Transactions = () => {
  const { transactions } = useTransactions();
  console.log("transactions ", transactions);

  return transactions.length > 0 ? (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  ) : (
    <ContainerEmpty>
      <h1>Nenhuma informação cadastrada</h1>
      <VscEmptyWindow />
    </ContainerEmpty>
  );
};
