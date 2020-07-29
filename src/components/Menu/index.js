import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './ButtonLink'

function Menu() {
    return ( <
        nav className = "Menu" >
        <
        Link to = "/" >
        <
        img className = "Logo"
        src = { Logo }
        alt = "Logo" /
        >
        <
        /Link> <
        Button as = { Link }
        className = "ButtonLink"
        to = "/cadastro/video" >
        Novo Vídeo <
        /Button> < /
        nav >
    )
}

export default Menu;