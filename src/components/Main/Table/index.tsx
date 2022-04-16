import { TableStyle } from "./style";
import { useContext } from "react";
import { TransactionsContext } from "../../../TransactionContext";

interface TransactionProps{
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

export function Table(){
    
    const transactions = useContext<TransactionProps[]>(TransactionsContext);

    return(
        <TableStyle>
            <thead>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(transaction.amount)}</td>
                    <td>{transaction.category}</td>
                    <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                </tr>
                )
                )}
            </tbody>
        </TableStyle>
    )
}