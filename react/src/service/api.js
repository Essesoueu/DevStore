import axios from "axios";

const api = axios.create({
    baseURL: 'https://devstoreess.herokuapp.com'
})


export default class Api {
    async cadastrarProduto(nm_produto,ds_categoria,vl_preco_de,vl_preco_por,vl_avaliacao,ds_produto,qtd_estoque,img_produto ) {

        let produtoJson = {
            nm_produto: nm_produto ,
            ds_categoria: ds_categoria,
            vl_preco_de: vl_preco_de,
            vl_preco_por: vl_preco_por,
            vl_avaliacao: vl_avaliacao,
            ds_produto: ds_produto,
            qtd_estoque: qtd_estoque,
            img_produto: img_produto,
            bt_ativo: true,
            dt_inclusao: new Date()
        };
        
        let r = await api.post('/produto', produtoJson);
        return r.data;
    }

    async listarProdutos(){
        let r = await api.get('/produto')
        return r.data;
    }

    async alterarProduto(id,nm_produto,ds_categoria,vl_preco_de,vl_preco_por,vl_avaliacao,ds_produto,qtd_estoque,img_produto) {

       
        let produtoJson = {
            nm_produto: nm_produto ,
            ds_categoria: ds_categoria,
            vl_preco_de: vl_preco_de,
            vl_preco_por: vl_preco_por,
            vl_avaliacao: vl_avaliacao,
            ds_produto: ds_produto,
            qtd_estoque: qtd_estoque,
            img_produto: img_produto,
            bt_ativo: true,
            dt_inclusao: new Date()
        };
        
        let r = await api.put(`/produto/${id}`, produtoJson);
        return r.data;
    }


    async deletarProduto(idAluno){
        let r = api.delete(`/produto/${idAluno}`)
        return r.data;
    }
}