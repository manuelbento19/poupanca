import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e2e2e2;
`
export const MainHeader = styled.header`
    width: 100%;
    height: 160px;
    background-color: #4caf50;
    padding: 20px 10px;
    h2{
        text-align: center;
        margin: auto;
        font-size: 1.3rem;
        color: #fff;
        font-weight: 100;
        span{
            color: #ff5722;
            --webkit-text-stroke: 2px red;
            font-size: 2rem;
        }
    }
`
export const Content = styled.main`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px 10px 10px;
    height: 100%;
`
export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 5%;
    @media(max-width:416px) {
        flex-direction: column;
        gap: 60px;
    }
`
export const marvelAnimation = keyframes`
    to{
        transform: initial;
        opacity: initial;
        filter: initial;
    }
`
export const Card = styled.article`
    cursor: pointer;
    color: #6f6f6f;
    margin-top: -50px;
    height: 125px;
    flex: 1;
    padding: 20px 20px 30px 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0;
    border-radius: 3px;
    box-shadow: 2px 3px 4px rgba(0 0 0 100);
    transition: all .5s ease;

    &:nth-child(1){
        opacity: 0;
        transform: translateX(-25%);
        animation: ${marvelAnimation} .6s ease forwards;
        header{
            svg{
                color: #4caf50;
            }
        }
        svg{
            color: #4caf50;
        }
        &:hover{
            transform: translateY(-5px);
            border-bottom: 4px solid #4caf50;
        }
    }
    &:nth-child(2){
        opacity: 0;
        transform: translateY(25%);
        animation: ${marvelAnimation} .6s .4s ease forwards;
        header{
            svg{
                color: #f44336;
            }
        }
        svg{
            color: #f44336;
        }
        &:hover{
            transform: translateY(-5px);
            border-bottom: 4px solid #f44336;
        }
    }
    &:nth-child(3){
        color: #fff;
        background-color: #f44336;
        transform: translateY(-25%);
        opacity: 0;
        animation: ${marvelAnimation} .6s .7s ease forwards;
        strong{
            color: #fff !important;
        }
        &:hover{
            transform: translateY(-5px);
            border-bottom: 4px solid #fff;
        }
    }
    @media(max-width:626px) {
        height: 100px;
        padding: 12px 12px 20px 12px;
        header {
            svg{
                font-size: 1.5rem;
            }
        }
        strong{
            font-size: .9rem;
            svg{
                margin-right: 3px;
                font-size: .5rem;
            }
        }
    }
    @media(max-width:416px) {
        flex-basis: auto;
    }

`
export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;   
    span{
        font-size: 1rem;
    }
    svg{
        font-size: 2rem;
        color: #fff;
        font-weight: 100;
    }
    strong{
        font-size: 1.4rem;
        font-weight: 200;
        display: flex;
        align-items: center;
        color: #555;
        svg{
            margin-right: 6px;
            font-size: .8rem;
            font-weight: 100;
        }
    }
`
export const MainContent = styled.section`
    flex: 1;
`
export const Table = styled.table`
    width: 100%;
    color: #444;
    display: flex;
    flex-direction: column;
`
export const TableHeader = styled.thead`
    width: 100%;
    padding: 0 8px;
`
export const TableHeaderRow = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0fr;
    gap: 6px;
    th{
        background-color: #fff;
        color: #555;
        font-size: 14px;
        text-align: left;
        padding: 15px 25px 15px;
        border-radius: 2px;
        &:last-child{
            padding: 6px;
            max-width: 60px;
            width: 40px;
        }
        @media(max-width:416px) {
            padding: 10px 15px 10px;
            font-size: .7rem;
        }
    }
`
export const TableBody = styled.tbody`
    padding: 0 4px;
    margin-top: 10px;
    max-height: 300px;
    overflow: auto;
    transform: translateX(-20%);
    opacity: 0;
    animation: ${marvelAnimation} 1.5s 1s ease forwards;
    &::-webkit-scrollbar{
        width: 6px;
        background-color: #ddd;
        padding: 6px;
        display: block;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ccc;
        border: none;
        border-radius: 3px;
    }
`
export const TableBodyRow = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0fr;
    gap: 6px;
    margin-bottom: 3px;
    overflow: hidden;
    min-height: 40px;
    cursor: pointer;
    
    &:hover td{
        background-color: #f2f2f2;
    }
    
    td{
        flex: 1;
        background-color: #fff;
        display: inline-block;
        align-items: center;
        color: #777;
        font-size: 15px;
        text-align: left;
        padding: 20px 25px 20px;
        border-radius: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-height: 80px;
        transition: background .3s;
        &:nth-child(3){
            display: flex;
            gap: 5px;
            align-items: center;
            &.good{
                color: #4caf50;
            }
            &.bad{
                color: #f44336;
            }
        }
        @media(max-width:416px) {
            padding: 10px 15px 10px;
            font-size: .5rem;
        }
        &:last-child{
            flex: content;
            padding: 0;
            max-width: 60px;
            width: 40px;
            button{
                display: flex;
                padding: 6px;
                width: 100%;
                height: 100%;
                margin: auto;
                background: none;
                border: 0;
                cursor: pointer;
                svg{
                    margin: auto;
                    font-size: 1.2rem;
                    color: #f44336;
                }
            }
            @media(max-width:416px) {
                button {
                    svg{
                        font-size: .8rem;
                    }
                }
            }
        }
    }
`
export const ButtonAdd = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: 0;
    height: 45px;
    width: 45px;
    display: flex;
    border-radius: 50%;
    padding: 6px;
    background-color: #3f8341;
    cursor: pointer;
    transition: background .4s ease;
    svg{
        font-size: .9rem;
        font-size: 100;
        color: #fff;
        margin: auto;
        transition: transform .2s ease;
    }
    :hover{
        background-color: #4caf50;
        svg{
            transform: scale(1.2);
        }
    }
`
