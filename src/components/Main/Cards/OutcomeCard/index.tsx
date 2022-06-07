import { OutcomeCardStyle } from "./style";
import OutcomeImg from "../../../../assets/outcome.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../../../TransactionContext";

export function OutcomeCard(){

    const {transactions} = useContext(TransactionsContext);

    const totalOutcome = transactions.reduce((acc, transaction) => {
        if(transaction.type === "outcome"){
            return acc + transaction.amount;
        }else{
            return acc;
        }
    }, 0);
    
    return(
        <OutcomeCardStyle>
            <div>
                <p>Saida</p>
                <img src={OutcomeImg} alt="Circulo vermelho com uma seta vermelha apontada pra baixo dentro do circulo" />
            </div>
            <strong>R$ {totalOutcome}</strong>
        </OutcomeCardStyle>
    )
}