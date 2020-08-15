import React from 'react';
import { Carousel } from 'react-bootstrap';
import ComponentItemDica from './../ItemDicas/ItemDica';
import ComponentCarousel from './../Carousel/Carousel';
import constItemDicaArma from './../../Helpers/Data/ConstItemDicaArma';
import ComponentBotaoTopo from './../BotaoTopo/BotaoTopo';
import imagemJogo01 from './../../assets/imagem/DicaArmas/Wallpaper-dicas-armas (1).jpg';
import imagemJogo02 from './../../assets/imagem/DicaArmas/Wallpaper-dicas-armas (2).jpg';
import imagemJogo03 from './../../assets/imagem/DicaArmas/Wallpaper-dicas-armas (3).jpg';

const Armas = (props) => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <ComponentCarousel
                        imagem={imagemJogo01}
                        altImagem={'Imagem armas 01'}
                        titulo={' '}
                        subTitulo={'Todas as armas legais do jogo'}
                        link={'#'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ComponentCarousel
                        imagem={imagemJogo02}
                        altImagem={'Imagem armas 02'}
                        titulo={' '}
                        subTitulo={'Todas as armas legais do jogo'}
                        link={'#'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ComponentCarousel
                        imagem={imagemJogo03}
                        altImagem={'Imagem armas 03'}
                        titulo={' '}
                        subTitulo={'Todas as armas legais do jogo'}
                        link={'#'}
                    />
                </Carousel.Item>
            </Carousel>
            <ComponentItemDica
                titulo={'Machadinha Viking'}
                subTitulo={'Arma branca rara, localizada em uma caverna na floresta, perto de Annesburs'}
                imagem={constItemDicaArma.DICAS_01}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentItemDica
                titulo={'Machadinha'}
                subTitulo={'Arma branca unica, localizada no fundo de uma casa, perto de Valentine'}
                imagem={constItemDicaArma.DICAS_02}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentItemDica
                titulo={'Machadinha Dupla'}
                subTitulo={'Arma branca unica, localizada na floresta, próximo de uma antiga lareira, perto de Valentine'}
                imagem={constItemDicaArma.DICAS_03}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentItemDica
                titulo={'Machadinha de Corte'}
                subTitulo={'Arma branca unica, localizada na floresta, próximo de uma fogueira, perto de Annesburs'}
                imagem={constItemDicaArma.DICAS_04}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentItemDica
                titulo={'Machadinha de Caçador'}
                subTitulo={'Arma branca unica, localizada na floresta, próximo de uma casa, escondida em um tronco de árvore, perto de Annesburs'}
                imagem={constItemDicaArma.DICAS_05}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentItemDica
                titulo={'Machadinha Dupla Corroída'}
                subTitulo={'Arma branca unica, localizada na cidade, próximo de uma casa vermelha, em Annesburs'}
                imagem={constItemDicaArma.DICAS_06}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
                condicao={'4'}
            />
            <ComponentBotaoTopo />
        </>
    );
}

export default Armas;