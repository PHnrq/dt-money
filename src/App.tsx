import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransactionContext";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle/>

      <TransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Header 
        onOpenNewTransaction={handleOpenNewTransactionModal}
      />

      <Main/>
    </TransactionsProvider>
  );
}