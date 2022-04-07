import Modal from 'react-modal';
import { ButtonType, Container, OptionButton } from './style';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface TransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){

    const [type, setType] = useState('income')

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
                    
                    <ButtonType 
                        type='button'
                        onClick={() => {setType('income')}}
                        isActive={type === 'income'}
                        activeColor='green'
                    >
                        <img src={IncomeImg} alt="Flexa verde dentro de um circulo verde" />
                        <p>
                            Entrada
                        </p>
                    </ButtonType>

                    <ButtonType
                        type='button'
                        onClick={() => {setType('outcome')}}
                        isActive= {type === 'outcome'}
                        activeColor='red'
                    >
                    <img src={OutcomeImg} alt="Flexa vermelha dentro de um circulo vermelha" />
                        <p>
                            Saída
                        </p>
                    </ButtonType>
                </OptionButton>

                <input type="text" placeholder="Categoria" />

                <button type="submit" className="btn-register">Cadastrar</button>
            </Container>

        </Modal>
    )
}