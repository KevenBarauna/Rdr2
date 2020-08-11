import React from 'react';
import { Carousel } from 'react-bootstrap';
import ComponentItemDica from './../ItemDicas/ItemDica';

import './Armas.css';
import ComponentCarousel from './../Carousel/Carousel';
import ConstItemDicaArma from './../../Helpers/ConstItemDicaArma';
import imagemJogo01 from './../../assets/imagem/WallpaperRdr2 (1).jpg';
import imagemJogo02 from './../../assets/imagem/WallpaperRdr2 (2).jpg';

const Armas = (props) => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <ComponentCarousel
                        imagem={imagemJogo01}
                        altImagem={'Imagem armas 01'}
                        titulo={'Título das armas teste'}
                        subTitulo={'Todas as armas legais do jogo'}
                        link={'/login'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ComponentCarousel
                        imagem={imagemJogo02}
                        altImagem={'Imagem armas 02'}
                        titulo={'Título das armas teste 02'}
                        subTitulo={'Todas as armas legais do jogo'}
                        link={'/404'}
                    />
                </Carousel.Item>
            </Carousel>
            <ComponentItemDica
                titulo={'Machadinha Viking'}
                subTitulo={'Arma branca rara, localizada em uma caverna na floresta, perto de Annesburs'}
                imagem={ConstItemDicaArma.DICAS_01}
                dano={'3.2'}
                alcance={'1'}
                cadencia={'0'}
                recarga={'0'}
                precisao={'1'}
            />
            <ComponentItemDica
                titulo={'Machado legal'}
                subTitulo={'Arma branca'}
                imagem={ConstItemDicaArma.DICAS_02}
            />
        </>
    );
}

export default Armas;