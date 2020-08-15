import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import ComponentCarousel from './../Carousel/Carousel';
import './ItemDica.css';

const ItemDica = (props) => {
    const {
        titulo, //TITULO DO TEXTO  [STRING]
        subTitulo, //SUBTITULO DO TEXTO [STRING]
        imagem, //IMAGEM [ARRAY]
        alt, //ALT DA IMAGEM [STRING]
        tituloImagem, //TITULO DA IMAGEM  [STRING]
        subTituloImagem,//SUBTITULO DA IMAGEM [STRING]
        dano, //SUBTITULO DO TEXTO [STRING]
        alcance, //SUBTITULO DO TEXTO [STRING]
        cadencia, //SUBTITULO DO TEXTO [STRING]
        recarga, //SUBTITULO DO TEXTO [STRING]
        precisao, //SUBTITULO DO TEXTO [STRING]
        condicao, //SUBTITULO DO TEXTO [STRING]
    } = props;


    return (
        <Row className='itemDica-background'>
            <Col sm={6} md={6} lg={6}>
                <Carousel>
                    {imagem.map((img, index) => (
                        <Carousel.Item key={index}>
                            <ComponentCarousel
                                imagem={img}
                                altImagem={alt}
                                titulo={tituloImagem}
                                subTitulo={subTituloImagem}
                                link={'#'}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col >
            <Col sm={6} md={6} lg={6}>
                <p className='itemDica-titulo'>{titulo}</p>
                <p className='itemDica-sub-titulo'>{subTitulo}</p>
                <p>{' '}</p>
                {dano ? <p className='itemDica-informacoes'>Dano: {dano}</p> : null}
                {alcance ? <p className='itemDica-informacoes'>Alcance: {alcance}</p> : null}
                {cadencia ? <p className='itemDica-informacoes'>Cadência: {cadencia}</p> : null}
                {recarga ? <p className='itemDica-informacoes'>Recarga: {recarga}</p> : null}
                {precisao ? <p className='itemDica-informacoes'>Precisão: {precisao}</p> : null}
                {condicao ? <p className='itemDica-informacoes'>Condição: {condicao}</p> : null}
            </Col>
        </Row>
    );
}

export default ItemDica;