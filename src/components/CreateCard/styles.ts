import styled from "styled-components";
import { marvelAnimation } from "../../pages/Dashboard/styles";

export const Container = styled.div`
    max-width: 320px;
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: -16px 14px 10px rgba(0 0 0 /15%);
    transform: translateY(15%);
    opacity: 0;
    animation: ${marvelAnimation} .6s ease forwards;
`
export const Header = styled.header`
    width: 100%;
    padding: 12px 6px; 
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: .9rem;
        font-weight: 100;
    }
    button{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        svg{
            font-size: 1.4rem;
            font-weight: 100;
            color: #fff;
        }
    }
`;
export const Form = styled.form`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 12px 10px;
    gap: 12px;
    input,select,button,textarea{
        width: 100%;
        padding: 6px;
        outline: none;
        border-radius: 4px;
    }
    select{
        border: 1px solid #ccc;
        color: #444;
    }
    textarea{
        color: #444;
        border: 1px solid #ccc;
        max-height: 200px;
        min-height: 100px;
    }
    button{
        border: none;
        background-color: #333;
        font-size: .9rem;
        color: #fff;
        padding: 12px 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: background .5s ease;
        &:hover{
            background-color: #4caf50;
            cursor: pointer;
        }
    }
`
export const InputGroup = styled.div`
    label{
        display: block;
        color: #444;
        font-size: .9rem;
        font-weight: 100;
        margin-bottom: 5px;
    }
    input{
        width: 100%;
        padding: 6px;
        border: 1px solid #ccc;
        color: #444;
    }
`;