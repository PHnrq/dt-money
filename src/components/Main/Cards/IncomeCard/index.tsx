import { IncomeCardStyle } from "./style";
import IncomeImg from "../../../../assets/income.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../../../TransactionContext";

export function IncomeCard(){

    const {transactions} = useContext(TransactionsContext);

    const totalIncome = transactions.reduce((acc, transaction) => {
        if(transaction.type === "income"){
            return acc + transaction.amount;
        }else{
            return acc;
        }
    }, 0);
    
    return(
        <IncomeCardStyle>
            <div>
                <p>Entradas</p>
                <img src={IncomeImg} alt="Circulo verde com uma seta verde apontada pra cima dentro do circulo" />
            </div>
            <strong>R$ {totalIncome}</strong>
        </IncomeCardStyle>
    )
}