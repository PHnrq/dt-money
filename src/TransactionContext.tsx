import React from "react";
import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps{
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

interface TransactionsProviderProps{
    children: React.ReactNode
}

export const TransactionsContext = createContext([]);

export function TransactionsProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data.transactions);
        })}, []);

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    
    )}