import { TotalCardStyle } from "./style";
import TotalImg from "../../../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../../../TransactionContext";

export function TotalCard(){

    const {transactions} = useContext(TransactionsContext);

    const total = transactions.reduce((acc, transaction) => {
        transaction.type === "income" ? acc += transaction.amount : acc -= transaction.amount;
        return acc;
    }, 0);

    return(
        <TotalCardStyle>
            <div>
                <p>Total</p>
                <img src={TotalImg} alt="Simbolo do Sifrão, um S com um risco no meio" />
            </div>
            <strong>R$ {total}</strong>
        </TotalCardStyle>
    )
}