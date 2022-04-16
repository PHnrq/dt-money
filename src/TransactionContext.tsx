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

interface TransactionsContextData{
    transactions: TransactionProps[],
    createTransactions: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data.transactions);
        })}, []);

    async function createTransactions(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()
      });
        
      const {transaction} = response.data;
        
      setTransactions([transaction, ...transactions]);
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransactions}}>
            {children}
        </TransactionsContext.Provider>
    
    )
}
