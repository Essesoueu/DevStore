import { Cabecalho2 } from "../../components/cabecalho"
import BarraLateral from "../../components/barra-lateral"
import { Container, ContainerConteudo } from "./style"
import { CharInput, Charbutton, Chartextarea } from "../../components/inputs"
import { useEffect, useState, useRef} from "react"
import Api from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoadingBar from 'react-top-loading-bar'

const api = new Api();


    
  

export default function Home() {

    const [idalterando, setIdalterando] = useState('');
    const [produto, setProduto] = useState('');
    const [categoria, setCategoria] = useState('');
    const [vl_preco_de, setVl_preco_de] = useState('');
    const [vl_preco_por, setVl_preco_por] = useState('');
    const [vl_avaliacao, setVl_avaliacao] = useState('');
    const [ds_produto, setDs_produto] = useState('');
    const [qtd_estoque, setQtd_estoque] = useState('');
    const [img_produto, setImg_produto] = useState('');
    const [produtos, setProdutos] = useState([]);

    const ref = useRef(null);

    const atualizar = async () => {
        const r = await api.listarProdutos();
        console.log(r);
        setProdutos(r);
    }

    const reset = async () => {
        setIdalterando('')
        setProduto('');
        setCategoria('');
        setVl_preco_de('');
        setVl_preco_por('');
        setVl_avaliacao('');
        setDs_produto('');
        setQtd_estoque('');
        setImg_produto('');
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

    
    const cadastrarproduto = async () => {

        if (vl_preco_de < 0 || vl_preco_por < 0 || vl_avaliacao < 0 || qtd_estoque < 0){
            toast.error('não pode numero negativo')
            return;
        }
         
        if (ds_produto === '' || vl_avaliacao === '' || qtd_estoque === '' || vl_preco_por === '' || vl_preco_de === '' || categoria === '' || produto === '' )
            return toast.error("nenhum campo pode estar vazio");

            ref.current.continuousStart();
        if (idalterando === 0){
            
        const r = await api.cadastrarProduto(produto, categoria, vl_preco_de, vl_preco_por, vl_avaliacao, ds_produto, qtd_estoque, img_produto)
        if (!validarResposta(r)){
            console.log(r.erro)
            return;
        } 
        toast.success('produto inserido')
        console.log(r)
        
    } 
        else {
        const r = await api.alterarProduto(idalterando, produto, categoria, vl_preco_de, vl_preco_por, vl_avaliacao, ds_produto, qtd_estoque, img_produto)
        alert('certifique-se de colocar um numero no campo de chamada, caso não coloque um numero o aluno não será alterado')
        toast.success('produto alterado')
        console.log(r);
        }
        ref.current.complete();

        atualizar();
        reset();
    };

    const alterarproduto = async (item) => {
        setIdalterando(item.id_produto);
        setProduto(item.nm_produto);
        setCategoria(item.ds_categoria);
        setVl_preco_de(item.vl_preco_de);
        setVl_preco_por(item.vl_preco_por);
        setVl_avaliacao(item.vl_avaliacao);
        setDs_produto(item.ds_produto);
        setQtd_estoque(item.qtd_estoque);
        setImg_produto(item.img_produto);
    }

   
    const deleteproduto = async (item) => {

        confirmAlert({
            title: 'Remover produto',
            message: 'Certeza que quer remover isso dai?',
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    const r = await api.deletarProduto(item.id_produto); 
                    console.log(r) 
                    toast.success(`${item.nm_produto} deletado com sucesso`)
                    atualizar();
                }
              },
              {
                label: 'No',
                onClick: () => alert('No')
              }
            ]
          });
        };
      
    
       

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color='#f11946' ref={ref} />
            <BarraLateral />
            <ContainerConteudo>
                <Cabecalho2 />
                <div className = "cadastro">
                    <div className = "titulo">
                    <div className = "barrinha">
                        |
                    </div>
                    <div className = "text">
                        <h3>{idalterando > 0 ?`Alterando produto ${produto}` :'Novo aluno'}</h3>
                    </div>
                    </div>
                  <div className = "box-cadastro">
                      <div>
                        <div className = "label">Nome</div>
                        <CharInput className = "input" value={produto} onChange={e => setProduto(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label">Preço de:</div>
                         <CharInput className = "input" value={vl_preco_de} onChange={e => setVl_preco_de(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label">Categoria</div>
                        <CharInput className = "input" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label">Preço por:</div>
                        <CharInput className = "input" value={vl_preco_por} onChange={e => setVl_preco_por(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label"> Avaliação:</div>
                        <CharInput className = "input" value={vl_avaliacao} onChange={e => setVl_avaliacao(e.target.value)}/>
                      </div>
                      <div>
                         <div className = "label">Estoque:</div>
                        <CharInput className = "input" value={qtd_estoque} onChange={e => setQtd_estoque(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label">Link da imagem:</div>
                        <CharInput className = "input"  value={img_produto} onChange={e => setImg_produto(e.target.value)}/>
                      </div>
                      <div>
                        <div className = "label">Descrição:</div>
                        <Chartextarea className="texta" value={ds_produto} onChange={e => setDs_produto(e.target.value)}/>
                      </div>
                    </div>
            
                      
                    <div className = "cadastrar"><Charbutton onClick={cadastrarproduto}> {idalterando > 0 ?"Alterar" :"Cadastrar"} </Charbutton></div>
                    </div>

                <div className = "Container-tabela">
                    <div className = "tabela">
                        <table>
                            <thead>
                        
                            <tr>
                                <div className="icon"><th className="id"></th></div>
                                <div className="id"><th className="id">id</th></div>
                                <div className="nm"><th className="nm">Produto</th></div>
                                <div className="chamada"><th className="chamada">Categoria</th></div>
                                <div className="turma"><th className="turma">Preco</th></div>
                                <div className="curso"> <th className="curso">Estoque</th></div>
                                <div><th className="coluna-botao"></th></div>
                                <div><th className="coluna-botao"></th></div>
                            </tr>
                            </thead>
                            <tbody>
                                {produtos.map((x,i) =>
                            <tr className={i % 2 === 0 ?"int" :""}>
                                <td className="icon"><img src={x.img_produto} alt="" /></td>
                                <td className = "id">{x.id_produto}</td>
                                <td className="nm" title={x.nm_produto}> {x.nm_produto != null && x.nm_produto.length >= 30 ? x.nm_produto.substr(0, 30) + '...' : x.nm_produto}
                                </td>
                                <td className="chamada">{x.ds_categoria}</td>
                                <td className="turma">{x.vl_preco_de}</td>
                                <td className="curso">{x.qtd_estoque}</td>
                                <td className="coluna-botao"><svg onClick={() => alterarproduto(x)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.5" cy="15.5" r="15.5" fill="#565656"/>
                                    <path d="M15.7917 9.83334H10.8334C10.4576 9.83334 10.0973 9.98259 9.83162 10.2483C9.56594 10.5139 9.41669 10.8743 9.41669 11.25V21.1667C9.41669 21.5424 9.56594 21.9027 9.83162 22.1684C10.0973 22.4341 10.4576 22.5833 10.8334 22.5833H20.75C21.1257 22.5833 21.4861 22.4341 21.7518 22.1684C22.0174 21.9027 22.1667 21.5424 22.1667 21.1667V16.2083" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.1042 8.77084C21.386 8.48904 21.7682 8.33073 22.1667 8.33073C22.5652 8.33073 22.9474 8.48904 23.2292 8.77084C23.511 9.05263 23.6693 9.43482 23.6693 9.83334C23.6693 10.2319 23.511 10.614 23.2292 10.8958L16.5 17.625L13.6667 18.3333L14.375 15.5L21.1042 8.77084Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></td>
                                <td className="coluna-botao"><svg onClick={() => deleteproduto(x)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
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