export interface IDespesa{
    id?:string;
    tipo:string;
    valor: number;
    descricao: string;
    entrada?: boolean;
    created_at?: Date;
}