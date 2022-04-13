import { TableStyle } from "./style";
import { api } from '../../../services/api'
import { useEffect, useState } from "react";

interface TransactionProps{
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

export function Table(){
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data.transactions);
        })}, []);
    
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