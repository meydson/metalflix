import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return ( <
        PageDefault >
        <
        h1 > Cadastro de Categoria < /h1>   <
        from >
        <
        label >
        Nome da Categoria <
        input type = "text" / >
        <
        /label> <
        button >
        Cadastrar <
        /button> < /
        from > <
        Link to = "/" >
        Ir para Home <
        /Link> < /
        PageDefault >
    )
}

export default CadastroCategoria;