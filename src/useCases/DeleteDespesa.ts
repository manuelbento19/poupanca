import { IDespesa } from "../interfaces/Despesa";
import { StorageManager } from "../utils/storageManager";

export class DeleteDespesaCase{    
    constructor(){

    }
    execute(id:string){
        var despesas:IDespesa[] = StorageManager.Get("despesas");
        despesas = despesas.filter(item=>item.id!=id);
        StorageManager.Save("despesas",despesas);
    }
}