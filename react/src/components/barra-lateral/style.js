import styled from "styled-components";




const BarraLateral = styled.div`
display: flex;
flex-direction: column;
background-color: #1A1A1A;
//position: absolute;
width: 25.3em;
height: 100vh;
.options {
    display: flex;
    flex-direction: column;
    background-color: #2B3031;
    margin-top: 7em;

  
    padding-top: 2em;
}
.escolhas{
    display: flex;
    flex-direction: row;
  

    height: 3.5em;
    padding-left: 4em;
}
.Mais-options{
    display: flex;
    flex-direction: row;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bolder;
    font-size: 1.6em;
    line-height: 21px;
}

.outros {
    padding-left: 8em;
}

.opcao1{
    display: flex;
    flex-direction: row;

    background-color: white;

}
.barrinha {
    padding: 0px 0px;
    
}

.nome-opcao{
    font-family: Roboto;
    font-style: normal;
    font-weight: bolder;
    font-size: 1.5em;
    line-height: 21px;

    padding-left: 2.5em;
    padding-top: 0.7em;
    color: #1A1A1A;
}
`

export {BarraLateral}
