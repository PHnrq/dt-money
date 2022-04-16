import { IncomeCardStyle } from "./style";
import IncomeImg from "../../../../assets/income.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../../../TransactionContext";

export function IncomeCard(){

    const data = useContext(TransactionsContext);

    return(
        <IncomeCardStyle>
            <div>
                <p>Entradas</p>
                <img src={IncomeImg} alt="Circulo verde com uma seta verde apontada pra cima dentro do circulo" />
            </div>
            <strong>R$ 17.400,00</strong>
        </IncomeCardStyle>
    )
}