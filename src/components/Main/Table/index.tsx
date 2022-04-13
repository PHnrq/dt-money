import { TableStyle } from "./style";
import { api } from '../../../services/api'
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../../TransactionContext";



export function Table(){
    
    const data = useContext(TransactionContext);
    
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