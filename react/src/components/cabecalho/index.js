import { ContainerCabecalho, ContainerCabecalho2 } from "./style";
import Api from "../../service/api";

const api = new Api();
export default function Cabecalho() {
    
    return (
        <ContainerCabecalho>   
           <div className = "identidade">  
            <div className = "logo"> <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.33331 26C5.33331 25.1159 5.6845 24.2681 6.30962 23.643C6.93474 23.0178 7.78259 22.6667 8.66665 22.6667H26.6666" stroke="#DB21BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.66665 2.66666H26.6666V29.3333H8.66665C7.78259 29.3333 6.93474 28.9821 6.30962 28.357C5.6845 27.7319 5.33331 26.884 5.33331 26V5.99999C5.33331 5.11593 5.6845 4.26809 6.30962 3.64297C6.93474 3.01785 7.78259 2.66666 8.66665 2.66666V2.66666Z" stroke="#DB21BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>
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
<circle cx="10" cy="10" r="9" fill="#DB21BD" stroke="white" stroke-width="2"/>
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