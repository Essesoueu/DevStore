import { ContainerCabecalho, ContainerCabecalho2 } from "./style";
import Api from "../../service/api";

const api = new Api();
export default function Cabecalho() {
    
    return (
        <ContainerCabecalho>   
           <div className = "identidade">  
            <div className = "logo"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.65 14.39L12 22.13L1.35002 14.39C1.20725 14.285 1.10134 14.1375 1.04746 13.9687C0.993572 13.7998 0.99447 13.6183 1.05002 13.45L2.27002 9.66999L4.71002 2.15999C4.73369 2.0988 4.77136 2.044 4.82002 1.99999C4.89926 1.92761 5.0027 1.88748 5.11002 1.88748C5.21734 1.88748 5.32078 1.92761 5.40002 1.99999C5.45141 2.04966 5.48927 2.11161 5.51002 2.17999L7.95002 9.66999H16.05L18.49 2.15999C18.5137 2.0988 18.5514 2.044 18.6 1.99999C18.6793 1.92761 18.7827 1.88748 18.89 1.88748C18.9973 1.88748 19.1008 1.92761 19.18 1.99999C19.2314 2.04966 19.2693 2.11161 19.29 2.17999L21.73 9.68999L23 13.45C23.0505 13.6235 23.0438 13.8086 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39V14.39Z" stroke="#10EAEA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
           <div className = "titulo"> <h1> Dev<span>Schools</span> </h1> </div>
           </div>
        </ContainerCabecalho>
    )
}

function Cabecalho2 (){
    const atualizar = async () => {
        const r = await api.listarAlunos();
        console.log(r);
    }

    
    return (
        <ContainerCabecalho2>
            <div className="perfil">
                <div className="foto"><img src="/assets/images/perfilft.jpg" alt="" /> 
                </div>
                <div className="bola"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="9" fill="#119FDC" stroke="white" stroke-width="2"/>
</svg>
</div>
                <div className="wllcome">olá, <span> Fimosinha478</span></div>
            </div>
            <div className = "botoes">
                <div className = "atualizar"><button className = "atualize" onClick={atualizar}> <svg width="25" height="21" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.944 9.979C20.455 14.488 16.638 18 12 18C9.302 18 6.888 16.806 5.237 14.925L6.482 13.292C7.765 14.937 9.758 16 12 16C15.526 16 18.444 13.376 18.923 9.979H16L20 4.729L24 9.979H20.944ZM5.08 8C5.567 4.613 8.48 2 12 2C14.237 2 16.228 3.059 17.51 4.698L18.754 3.066C17.104 1.19 14.693 0 12 0C7.368 0 3.557 3.501 3.059 8H0L4 13.25L8 8H5.08Z" fill="white"/>
</svg></button></div>
                <div className="sair"><button className="atualize"><svg width="25" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 17L21 12L16 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 12H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button></div></div>
        </ContainerCabecalho2>
    )
}

export {Cabecalho2}