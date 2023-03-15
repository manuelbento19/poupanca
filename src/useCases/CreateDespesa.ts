import { IDespesa } from "../interfaces/Despesa";
import { StorageManager } from "../utils/storageManager";
import {v4 as uuid} from 'uuid';
export class CreateDespesaCase{    
    constructor(){

    }
    execute(data:IDespesa){
        const despesas:IDespesa[] = StorageManager.Get("despesas");

        if(!data.valor || data.valor<0 )
            throw new Error("Verifique o valor");
        if(!data.descricao )
            throw new Error("Preencha a descrição");

        const id =  uuid();
        data.id = id;
        data.created_at = new Date();
        despesas.push(data);
        StorageManager.Save("despesas",despesas);
    }
}