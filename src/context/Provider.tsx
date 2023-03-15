import React from 'react';
import { IDespesa } from '../interfaces/Despesa';
import { StorageManager } from '../utils/storageManager';
import { IFinalidade } from '../interfaces/Finalidade';

interface IPropsContext{
    GetDespesas(): void;
    despesas: IDespesa[];
    finalidades: IFinalidade[];
}

export const Context = React.createContext<IPropsContext>({
    despesas: [],
    finalidades:[],
    GetDespesas() {
    }
    
})

interface IProps{
    children: React.ReactNode
}

export const DespesasProvider : React.FC<IProps> = ({children}) =>{
    const [despesas,setDespesas] = React.useState<IDespesa[]>([]);
    const [finalidades,setFinalidades] = React.useState<IFinalidade[]>([
        {
            id:1,
            finalidade:"Alimentação"
        },
        {
            id:2,
            finalidade:"Transporte"
        },
        {
            id:3,
            finalidade:"Roupa"
        },
        {
            id:4,
            finalidade:"Higiene"
        },
        {
            id:5,
            finalidade:"Diversão",
        },
        {
            id:6,
            finalidade:"Telefone",
        },
        {
            id:7,
            finalidade:"Salário",
        },
        {
            id:8,
            finalidade:"Negócio",
        }
    ]);

    function GetDespesas(){
        const data = StorageManager.Get("despesas") as IDespesa[];
        if(data)
        setDespesas(data)
    }

    return(
        <Context.Provider value={{
            GetDespesas,
            despesas,
            finalidades
        }}>
        {children}
        </Context.Provider>
    )
}
export const DespesasContex = () => React.useContext(Context)