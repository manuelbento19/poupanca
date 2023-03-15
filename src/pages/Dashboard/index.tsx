import React from "react";
import { ButtonAdd, Card, CardHeader, Container, Content, HeaderContent, MainContent, MainHeader, Table, TableBody, TableBodyRow, TableHeader, TableHeaderRow } from "./styles";
import {FaArrowCircleUp,FaPlus,FaArrowCircleDown,FaMinus,FaMoneyBill,FaMinusCircle} from 'react-icons/fa';
import CreateCard from "../../components/CreateCard";
import { DespesasContex } from "../../context/Provider";
import { DeleteDespesaCase } from "../../useCases/DeleteDespesa";
import Credits from "../../components/credits";

function Dashboard(){
    const [visible,setVisible] = React.useState(false);
    const {despesas,GetDespesas} = DespesasContex();
    const deleteDespesaCase = new DeleteDespesaCase();

    React.useEffect(()=>{
        GetDespesas();
    },[])

    function deleteDespesa(id:string){
        try{
            deleteDespesaCase.execute(id);
            GetDespesas();
        }
        catch{

        }
    }
    return(
        <Container>
            <MainHeader>
                <h2>Poupa<span>.</span>Só</h2>
            </MainHeader>
            <Content>
                <HeaderContent>
                    <Card>
                        <CardHeader>
                            <span>Entradas</span>
                            <FaArrowCircleUp/>
                        </CardHeader>
                        <strong>
                           <FaPlus/> AKZ {(despesas.filter(item=> item.entrada).reduce((total,prev)=>total + prev.valor,0))}
                        </strong>
                    </Card>
                    <Card>
                        <CardHeader>
                            <span>Saídas</span>
                            <FaArrowCircleDown/>
                        </CardHeader>
                        <strong>
                            <FaMinus/> AKZ {(despesas.filter(item=> !item.entrada).reduce((total,prev)=>total + prev.valor,0))}
                        </strong>
                    </Card>
                    <Card>
                        <CardHeader>
                            <span>Total</span>
                            <FaMoneyBill/>
                        </CardHeader>
                        <strong>
                            <FaMinus/> AKZ {despesas.filter(item=> item.entrada).reduce((total,prev)=>total + prev.valor,0) + despesas.filter(item=> !item.entrada).reduce((total,prev)=>total + prev.valor,0)}
                        </strong>
                    </Card>
                </HeaderContent>
                <MainContent>
                    <Table>
                        <TableHeader>
                            <TableHeaderRow>
                                <th>Descrição</th>
                                <th>Tipo</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th></th>
                            </TableHeaderRow>
                        </TableHeader>
                        <TableBody>
                            {despesas.map((despesa,index)=>(
                                <TableBodyRow key={index}>
                                    <td>{despesa.descricao}</td>
                                    <td>{despesa.tipo}</td>
                                    <td className={despesa.entrada ? "good": "bad"}>{despesa.entrada ? <FaPlus/>: <FaMinus/>} {despesa.valor}</td>
                                    <td>{despesa.created_at && (new Date(despesa.created_at)).toLocaleDateString()}</td>
                                    <td>
                                        <button onClick={e=>despesa.id && deleteDespesa(despesa.id)}><FaMinusCircle/></button>
                                    </td>
                             </TableBodyRow>     
                            ))}
                        </TableBody>
                    </Table>
                </MainContent>               
            </Content>
            {visible ? <CreateCard visible={setVisible}/>:(
                    <ButtonAdd onClick={e=>setVisible(true)}>
                        <FaPlus/>
                    </ButtonAdd>
            )}
            <Credits/>
        </Container>
    )
}
export default Dashboard;