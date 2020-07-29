import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function App() {
    return ( <
        div style = {
            { background: "#141414" }
        } >
        <
        Menu / >

        <
        BannerMain videoTitle = { dadosIniciais.categorias[0].videos[0].titulo }
        url = { dadosIniciais.categorias[0].videos[0].url }
        videoDescription = { "A música aparece como quinto título do álbum Piece Of Mind, editado em 1983, e foi posteriormente lançada num single sobre o título The Trooper, a 20 de junho daquele ano. Previamente, havia sido lançado outro single do mesmo álbum, Flight of Icarus, fazendo The Trooper ser o segundo single e sem dúvida mais famoso entre ambos." }
        />

        <
        Carousel ignoreFirstVideo category = { dadosIniciais.categorias[0] }
        />

        <
        Carousel category = { dadosIniciais.categorias[1] }
        />

        <
        Carousel category = { dadosIniciais.categorias[2] }
        />      

        <
        Carousel category = { dadosIniciais.categorias[3] }
        />      

        <
        Carousel category = { dadosIniciais.categorias[4] }
        />      

        <
        Carousel category = { dadosIniciais.categorias[5] }
        />      

        <
        Footer / >
        <
        /div>
    );
}

export default App;