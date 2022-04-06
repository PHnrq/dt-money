import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <section>
      <GlobalStyle/>

      <Header 
        onOpenNewTransaction={handleOpenNewTransactionModal}
      />

      <Main/>
    </section>
  );
}