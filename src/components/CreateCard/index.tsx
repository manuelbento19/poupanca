import React from 'react';
import {AiOutlineClose as CloseIcon} from 'react-icons/ai';
import {FaPlusCircle} from 'react-icons/fa';
import { Container, Form, Header, InputGroup } from './styles';
import { IDespesa } from '../../interfaces/Despesa';
import { DespesasContex} from '../../context/Provider';
import { CreateDespesaCase } from '../../useCases/CreateDespesa';
import { DeleteDespesaCase } from '../../useCases/DeleteDespesa';

interface IProps{
    visible(value:boolean): void;
}
const CreateCard: React.FC<IProps> = ({visible}) => {
    const [despesa,setDespesa] = React.useState<IDespesa>({
        descricao:"",
        tipo:"",
        valor:0
    });
    const {GetDespesas,finalidades } = DespesasContex();

    const createDespesa = new CreateDespesaCase();
    React.useEffect(()=>{
        GetDespesas()
    },[]);

    function register(e:React.FormEvent){
        e.preventDefault();
        try{
            createDespesa.execute(despesa);
            GetDespesas();
            setDespesa({
                descricao:'',
                tipo:'',
                valor:0
            })
        }
        catch(error:any){
            alert(error.message);
        }
    }
  return (
    <Container>
        <Header>
            <span>Registrar</span>
            <button onClick={e=>visible(false)}><CloseIcon/></button>
        </Header>
        <Form onSubmit={register}>
            <InputGroup>
                <label htmlFor="finalidade">Tipo/Finalidade</label>
                <input type='text' id="valor" required value={despesa.tipo} list='finalidade' onChange={e=>setDespesa(prev=>{
                    return{
                        ...prev,
                        tipo: e.target.value
                    }
                })}/>
                <datalist id="finalidade">
                    {finalidades && finalidades.map((item,index)=>(
                        <option value={item.finalidade} key={index}>{item.finalidade}</option>
                    ))}
                </datalist>
            </InputGroup>
            <InputGroup>
                <label htmlFor="valor">Valor {"(AKZ)"}</label>
                <input type='text' id="valor" value={despesa?.valor} onChange={e=>setDespesa(prev=>{
                    return{
                        ...prev,
                        valor: Number(e.target.value.replace(/[^0-9]/g,''))
                    }
                })}/>
            </InputGroup>
            <InputGroup>
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" required value={despesa.descricao} onChange={e=>setDespesa(prev=>{
                    return{
                        ...prev,
                        descricao: e.target.value
                    }
                })}></textarea>
            </InputGroup>
            <select id="type" onChange={e=>setDespesa(prev=>{
                    return{
                        ...prev,
                        entrada: e.target.value==="2"
                    }
                })}>
                <option value="1">Saída</option>
                <option value="2">Entrada</option>
            </select>
            <button type='submit'>Registrar <FaPlusCircle/></button>
        </Form>
    </Container>
  );
}

export default CreateCard;