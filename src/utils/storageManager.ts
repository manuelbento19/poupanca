export abstract class StorageManager{
    
    static Get(local:string){
        const data = localStorage.getItem(local);
        if(!data) return []
        return JSON.parse(data); 
    }
    static Save(local:string,data:any){
        const dataParsed = JSON.stringify(data);
        localStorage.setItem(local,dataParsed);
    }
}