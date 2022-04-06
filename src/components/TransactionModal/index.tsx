import Modal from 'react-modal';
import { Container, OptionButton } from './style';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

interface TransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Overlay"
        >

            <Container>
                <h2>Nova transação</h2>

                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="Valor" />

                <OptionButton>
                    
                    <button>
                        <img src={IncomeImg} alt="Flexa verde dentro de um circulo verde" />
                        <p>
                            Entrada
                        </p>
                    </button>

                    <button>
                    <img src={OutcomeImg} alt="Flexa vermelha dentro de um circulo vermelha" />
                        <p>
                            Saída
                        </p>
                    </button>
                </OptionButton>

                <input type="text" placeholder="Categoria" />

                <button type="submit" className="btn-register">Cadastrar</button>
            </Container>

        </Modal>
    )
}