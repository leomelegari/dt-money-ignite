import ReactModal from "react-modal";
import CloseImg from "../../assets/fechar.svg";
import IncomeImg from "../../assets/entradas.svg";
import OutcomeImg from "../../assets/saídas.svg";
import { Container, RadioBox, TransactionType } from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      category,
      title,
      type,
      value,
    };

    api.post("/transactions", data);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionType>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={IncomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={OutcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionType>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};
