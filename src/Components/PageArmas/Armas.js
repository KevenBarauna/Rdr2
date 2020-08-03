import React from 'react';
import { Row, Col, Form, Carousel } from 'react-bootstrap';


import './Armas.css';
import ComponentCarousel from './../Carousel/Carousel';
import imagemJogo01 from './../../assets/imagem/WallpaperRdr2 (1).jpg';
import imagemJogo02 from './../../assets/imagem/WallpaperRdr2 (2).jpg';
import imagemJogo03 from './../../assets/imagem/WallpaperRdr2 (3).jpg';

const Armas = (props) => {


    return (
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
    );
}

export default Armas;