import React from 'react';
import { Carousel } from 'react-bootstrap';
import ComponentItemDica from './../../Components/ItemDicas/ItemDica';
import ComponentCarousel from './../../Components/Carousel/Carousel';
import constItemDicaArma from './../../Helpers/Data/ConstItemDicaArma';
import ComponentBotaoTopo from './../../Components/BotaoTopo/BotaoTopo';
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
            {constItemDicaArma.DICAS.map((item) => (
                <ComponentItemDica
                    key={item.id}
                    imagem={item.imagem}
                    alt={item.alt}
                    titulo={item.titulo}
                    subTitulo={item.subtitulo}
                    tituloImagem={item.tituloImagem}
                    subTituloImagem={item.subTituloImagem}
                    dano={item.dano}
                    alcance={item.alcance}
                    cadencia={item.cadencia}
                    recarga={item.recarga}
                    precisao={item.precisao}
                    condicao={item.condicao}
                />
            ))}
            <ComponentBotaoTopo />
        </>
    );
}

export default Armas;