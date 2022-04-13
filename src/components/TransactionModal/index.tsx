import Modal from 'react-modal';
import { ButtonType, Container, OptionButton } from './style';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface TransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
    
    const [type, setType] = useState('income');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    
    const data =({
        type,
        title,
        amount,
        category,
    })

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        api.post('/transactions', data)
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Overlay"
        >

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Nova transação</h2>

                <input type="text" placeholder="Titulo"  value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor"  value={amount} onChange={event => setAmount(Number(event.target.value))}/>

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

                <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit" className="btn-register">Cadastrar</button>
            </Container>

        </Modal>
    )
}