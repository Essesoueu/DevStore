import Cabecalho from "../cabecalho";
import { BarraLateral } from "./style";


export default function barraLateral(){
    return (
        <BarraLateral>
            <Cabecalho />
            <div className = "options">
            <div className = "escolhas">   
            <div className = "Mais-options"> Gerenciamento </div> 
            <div className = "outros"><svg width="18" height="18" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></div></div>
                <div className = "opcao1">
                    <div className="barrinha"><svg width="4" height="56" viewBox="0 0 4 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="4" height="798" fill="#DB21BD"/>
                        </svg></div>
                    <div className = "nome-opcao">Alunos</div></div></div>
            
        </BarraLateral>
    )
}