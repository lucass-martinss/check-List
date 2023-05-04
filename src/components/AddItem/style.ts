import styled from "styled-components";
export const Container = styled.div`
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    
    button {
        margin-left:15px;
        margin-bottom:13px;
        width:80px;
        height: 30px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
      }
      button.btn {
        font-weight: 600;
        color: #382b22;
        text-transform: uppercase;
        background: #cce0ff;
        border-radius: 0.50em;
        transition: transform 0.15s;
        transform-style: preserve-3d;
        
      }
      button.btn:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #80b3ff;
        border-radius: inherit;
    
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 0.15s, box-shadow 0.15s;
      }
      
      button.btn:hover {
        background: #b3d1ff;
        transform: translate(0, 0.25em);
      }
      button.btn:hover::before {
    
        transform: translate3d(0, 0.5em, -5em);
      }
      button.btn:active {
        background:  #80b3ff;
        transform: translate(0em, 0.75em);
      }
      button.btn:active::before {
        box-shadow: 0 0 0 2px #b3d1ff, 0 0 #b3d1ff;
        transform: translate3d(0, 0, -1em);
      }
      `

 export const Box = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    width:100%;
    
  
 
    input{
        margin-left: 5px;
        border: 0;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
 `;