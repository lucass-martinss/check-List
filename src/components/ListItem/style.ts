import styled from "styled-components";

type ContainerProp = {
    done: boolean
}
export const Container = styled.div(({ done }: ContainerProp) => (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margim-bottom: 10px;
    align-items: center;
    margin-top:10px;
    
    input{
        height: 15px;
        width: 15px;
    }

    label{

        color: #CCC;
        margin-left: 20px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button{
        margin-inline-start: auto;
        background: transparent;
        border: 0;
        cursor: pointer;
        display: content;
        padding: 3px;
        border-radius: 100%;
       
    } 
    `
))