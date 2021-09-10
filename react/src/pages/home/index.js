import { Cabecalho2 } from "../../components/cabecalho"
import BarraLateral from "../../components/barra-lateral"
import { Container, ContainerConteudo } from "./style"
import { CharInput, Charbutton } from "../../components/inputs"
import { useEffect, useState } from "react"
import Api from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new Api();



export default function Home() {

    const [idalterando, setIdalterando] = useState('');
    const [aluno, setAluno] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [alunos, setAlunos] = useState([]);



    const atualizar = async () => {
        const r = await api.listarAlunos();
        console.log(r);
        setAlunos(r);
    }

    const reset = async () => {
        setIdalterando('')
        setAluno('');
        setChamada('');
        setCurso('');
        setTurma('');
    }

    useEffect(() =>{
        atualizar()
    }, [])
  
    const validarResposta = (r) => {
        if (!r.erro)
            return true;
            toast.error(`${r.erro}`);

        return false;
    }
    const cadastraraluno = async () => {

        if (chamada < 0)
            return;

       console.log(typeof(chamada))
            
        if (aluno === '') 
        return toast.error("nenhum campo pode estar vazio");

        if (chamada === '')
         return toast.error("nenhum campo pode estar vazio");

        if (curso === '')
        return toast.error("nenhum campo pode estar vazio");

        if (turma === '')
        return toast.error("nenhum campo pode estar vazio");

        if (idalterando == 0){
        const r = await api.cadastrarAluno(aluno, chamada, curso, turma)
        if (!validarResposta(r))
            return;

        toast.success('aluno inserido')
        console.log(r)
        } else {
        const r = await api.alterarAluno(idalterando, aluno, chamada, curso, turma)
        alert('certifique-se de colocar um numero no campo de chamada, caso não coloque um numero o aluno não será alterado')
        toast.success('aluno alterado')
        console.log(r);
        }

        atualizar();
        reset();
    };

    const alteraraluno = async (item) => {
        setIdalterando(item.id_matricula);
        setAluno(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
    }

   
    const deleteAluno = async (item) => {
        const r = await api.deletarAluno(item.id_matricula);  
        toast.success(`${item.nm_aluno} deletado com sucesso`)
        atualizar();
    }
       

    return (
        <Container>
            <ToastContainer />
            <BarraLateral />
            <ContainerConteudo>
                <Cabecalho2 />
                <div className = "cadastro">
                    <div className = "titulo">
                    <div className = "barrinha">
                        |
                    </div>
                    <div className = "text">
                        <h3>Novo Aluno</h3>
                    </div>
                    </div>
                  <div className = "box-cadastro">
                      <div>
                      <div className = "label">Nome</div>
                      <CharInput className = "input" value={aluno} onChange={e => setAluno(e.target.value)}/>
                      </div>
                      <div>
                      <div className = "label">Chamada</div>
                      <CharInput className = "input" value={chamada} onChange={e => setChamada(e.target.value)}/>
                      </div>
                      <div>
                      <div className = "label">Curso</div>
                      <CharInput className = "input" value={curso} onChange={e => setCurso(e.target.value)}/>
                      </div>
                      <div>
                      <div className = "label">Turma</div>
                      <CharInput className = "input" value={turma} onChange={e => setTurma(e.target.value)}/>
                      </div>
                    </div>
                    <div className = "cadastrar"><Charbutton onClick={cadastraraluno}> {idalterando > 0 ?"Alterar" :"Cadastrar"} </Charbutton></div>
                    </div>

                <div className = "Container-tabela">
                    <div className = "tabela">
                        <table>
                            <thead>
                        
                            <tr>
                                <div className="id"><th className="id">id</th></div>
                                <div className="nm"><th className="nm">Nome</th></div>
                                <div className="chamada"><th className="chamada">Chamada</th></div>
                                <div className="turma"><th className="turma">Turma</th></div>
                                <div className="curso"> <th className="curso">Curso</th></div>
                                <div><th className="coluna-botao"></th></div>
                                <div><th className="coluna-botao"></th></div>
                            </tr>
                            </thead>
                            <tbody>
                                {alunos.map((x,i) =>
                            <tr className={i % 2 === 0 ?"int" :""}>
                                <td className = "id">{x.id_matricula}</td>
                                <td className="nm"> {x.nm_aluno != null && x.nm_aluno.length >= 30 ? x.nm_aluno.substr(0, 30) + '...' : x.nm_aluno}
                                </td>
                                <td className="chamada">{x.nr_chamada}</td>
                                <td className="turma">{x.nm_turma != null && x.nm_turma.length >= 10 ? x.nm_turma.substr(0, 10) + '...' : x.nm_turma}</td>
                                <td className="curso">{x.nm_curso != null && x.nm_curso.length >= 15 ? x.nm_curso.substr(0, 15) + '...' : x.nm_curso}</td>
                                <td className="coluna-botao"><svg onClick={() => alteraraluno(x)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.5" cy="15.5" r="15.5" fill="#565656"/>
                                    <path d="M15.7917 9.83334H10.8334C10.4576 9.83334 10.0973 9.98259 9.83162 10.2483C9.56594 10.5139 9.41669 10.8743 9.41669 11.25V21.1667C9.41669 21.5424 9.56594 21.9027 9.83162 22.1684C10.0973 22.4341 10.4576 22.5833 10.8334 22.5833H20.75C21.1257 22.5833 21.4861 22.4341 21.7518 22.1684C22.0174 21.9027 22.1667 21.5424 22.1667 21.1667V16.2083" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.1042 8.77084C21.386 8.48904 21.7682 8.33073 22.1667 8.33073C22.5652 8.33073 22.9474 8.48904 23.2292 8.77084C23.511 9.05263 23.6693 9.43482 23.6693 9.83334C23.6693 10.2319 23.511 10.614 23.2292 10.8958L16.5 17.625L13.6667 18.3333L14.375 15.5L21.1042 8.77084Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></td>
                                <td className="coluna-botao"><svg onClick={() => deleteAluno(x)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.5" cy="15.5" r="15.5" fill="#565656"/>
                                    <path d="M9.125 11.25H10.5417H21.875" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.6667 11.25V9.83333C12.6667 9.45761 12.8159 9.09727 13.0816 8.8316C13.3473 8.56592 13.7076 8.41666 14.0834 8.41666H16.9167C17.2924 8.41666 17.6527 8.56592 17.9184 8.8316C18.1841 9.09727 18.3334 9.45761 18.3334 9.83333V11.25M20.4584 11.25V21.1667C20.4584 21.5424 20.3091 21.9027 20.0434 22.1684C19.7777 22.4341 19.4174 22.5833 19.0417 22.5833H11.9584C11.5826 22.5833 11.2223 22.4341 10.9566 22.1684C10.6909 21.9027 10.5417 21.5424 10.5417 21.1667V11.25H20.4584Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.0833 14.7917V19.0417" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.9167 14.7917V19.0417" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
</td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    </div>
            </ContainerConteudo>
        </ Container>
    )
}