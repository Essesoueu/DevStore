import styled from 'styled-components';

const ContainerCabecalho = styled.div`
display: flex;
flex-direction: row;
background-color: #2B3031;

width: 25.3em;
border-radius: 1em 0em 0em 0em;
.identidade{
    display: flex;
    flex-direction: row;
    
    padding: 35px 106px 35px 49px;
    align-items: center;
}

.logo {
 padding-right: 0.8em;
}

.titulo {
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 33px;

color: #EA10C7;
}

span {
    color: white;
}


`

const ContainerCabecalho2 = styled.div`
display: flex;
flex-direction: row;

background-color: blue;

justify-content: space-between;
height: 7.5em;
width: 100%;

.perfil {
    display: flex;
    flex-direction: row;
    //position: absolute;
    align-items: center;
    
    
    padding-left: 3em;
    padding: 2em;
}
.foto {
    padding-right: 1.5em;
    
    padding-bottom: 3em;
}
.foto img{
    position: absolute;
    border-radius: 10em;
    height: 53px;
    
    
}


.bola {
    margin-left: 0.6em;
}
.bola svg {
    position: relative;
    width: 1.3em;

    margin-bottom: 1.2em;
    margin-right: 0.8em;
}
.wllcome {
    font-weight: bold;
}
.botoes{
    display: flex;
    flex-direction: row;

    align-self: flex-end;
    //padding-left: 62em;
    padding: 2.3em 9em;
}

.atualizar {
    padding-right: 0.7em;
}
.atualize {
    border-radius: 27em;
    background-color: #986CDF;
    border: none;
    padding: 0.7em;
}

span {
    font-weight: bolder;
}
`


export {ContainerCabecalho, ContainerCabecalho2};