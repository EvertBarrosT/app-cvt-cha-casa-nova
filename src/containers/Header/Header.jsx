import "../Header/Header.css"
import React from 'react';
import myImage from '/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/image/Logo.png';

const Header = () => {
    return (
        <header id="bodyHeader">
            <div id="logotipo">
                <img src={myImage} alt="Logotipo" width="60" height="50" />
                <span>Amanda</span>
                <span>&</span>
                <span>Evert</span>
            </div>
            <ul id="nav1">
                <li>Informações</li>
                <li>Paleta</li>
                <li>Produtos</li>
            </ul>
            <ul id="nav2">
                <li>Carrinho</li>
                <li>Login</li>
            </ul>
        </header>
    );
}

export default Header;