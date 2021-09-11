import styled from "styled-components";



const Container = styled.div`
display: flex;
flex-direction: row;

height: 100vh;
`

const ContainerConteudo = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(0deg, #F5F5F5, #F5F5F5), #F5F5F5;
width: 100%;
height: 100vh;
.cadastro{
    display: flex;
    align-self: center;
    background-color: blue;
    margin: 6em 0em;

    width: 70em;
    height: auto;
}
.titulo{
    display: flex;
    flex-direction: row;
    align-self: flex-start;

    padding-left: 2.5em;
}
.barrinha {
    border: 6px solid #119FDC;
    transform: rotate(-90deg);
    background-color: #119FDC;
    color: #119FDC; 
    border-radius: 5em;
    font-size: 1px;
    height: 5px;
    width: 45px;
    margin-top: 50em;
}
.text {
    font-family: Roboto;
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
    line-height: 37px;
    color: #3C3939;
}
.box-cadastro{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 73%;
    height:30%;
   
   margin-top: 7em;
   margin-left: -12em;

  margin-bottom: 4em;
}
.box-cadastro > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.label {
    padding-right: 2em;
    padding-top: 2em;
    position: absolute;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #3C3939;
}

.input {
    padding-top: 0.5em;
    margin-right: 6em;
    margin-left: 8em;
}

.img {
 margin-left: 11em;
 width: 42em;
 padding-top: 0.5em;
}

.texta {
    display: flex;
    margin-top: 2em;
    padding-bottom: 9.5em;
    margin-right: 6em;
    margin-left: 8em;
}

.cadastrar{
    align-self: flex-end;
    padding-bottom: 5em;
    font-size: 14px;
}

.Container-tabela {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 70em;
    background-color: green;
}
.tabela {
    display: flex;
    width: 65em;
    height: auto;
    background-color: blue;
    align-self: center;
    
    margin-right: 1.8em;
}

table{
    border: 0;
    font-size: 18px;
    width: 100%;
    border-collapse: collapse;

    background-color: #F5F5F5;
}
tr {
    display: flex;
    flex-direction: row;
}
td{
    border-collapse: collapse;
    
}

td svg {
    margin-left: 1em;
    margin-top: 0.4em;
    margin-right: 0.3em;
}
.x {
    display: flex;
    flex-direction: row;
    background-color: #986CDF;
}
thead{
    height: 5em;
    font-size: 18px;
    background-color: #119FDC;

    
}

tr:hover {
    .coluna-botao{
        visibility: visible;
    }
}

.coluna-botao{
    visibility: hidden;
}

.int {
    background-color: #ECE6F3;
}
.id {
    width: 5em;
    text-align: center;
    padding-top: 0.7em;
}

.nm {
    display: flex;
    text-align: start;
    width: 20em;
    border: none;
    padding-top: 0.8em;
}

.chamada{
    width: 7em;
    text-align: start;
    padding-top: 0.8em;
}

.turma {
    width: 6em;
    text-align: start;
    padding-top: 0.8em;
    margin-right: 5em;
}

.curso {
    width: 7em;
    text-align: start;
    padding-top: 0.8em;
    margin-left: 3em;
}
`

export { Container, ContainerConteudo}