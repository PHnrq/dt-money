import { OutcomeCardStyle } from "./style";
import OutcomeImg from "../../../../assets/outcome.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../../../TransactionContext";

export function OutcomeCard(){

    const data = useContext(TransactionsContext);
    
    return(
        <OutcomeCardStyle>
            <div>
                <p>Saida</p>
                <img src={OutcomeImg} alt="Circulo vermelho com uma seta vermelha apontada pra baixo dentro do circulo" />
            </div>
            <strong>R$ 1.259,00</strong>
        </OutcomeCardStyle>
    )
}