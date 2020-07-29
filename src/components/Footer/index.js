import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'

function Footer() {
    return ( <
        FooterBase >
        <
        Link to = "/" >
        <
        img src = { Logo }
        alt = "Logo" / >
        <
        /Link> <
        p >
        Desenvolvido por Meydson Baracho durante a { ' ' } <
        a href = "https://www.alura.com.br/" >
        Imersão React da Alura <
        /a> < /
        p > <
        /FooterBase>
    );
}

export default Footer;