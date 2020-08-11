import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import ComponentCarousel from './../Carousel/Carousel';
import './ItemDica.css';

const ItemDica = (props) => {
    const {
        titulo, //TITULO DO TEXTO  [STRING]
        subTitulo, //SUBTITULO DO TEXTO [STRING]
        imagem, //IMAGEM [ARRAY]
        dano, //SUBTITULO DO TEXTO [STRING]
        alcance, //SUBTITULO DO TEXTO [STRING]
        cadencia, //SUBTITULO DO TEXTO [STRING]
        recarga, //SUBTITULO DO TEXTO [STRING]
        precisao, //SUBTITULO DO TEXTO [STRING]
    } = props;


    return (
        <Row className='itemDica-background'>
            <Col sm={6} md={6} lg={6}>
                <Carousel>
                    {imagem.map((img, index) => (
                        <Carousel.Item key={index}>
                            <ComponentCarousel
                                imagem={img.imagem}
                                altImagem={img.alt}
                                titulo={img.titulo}
                                subTitulo={img.subTitulo}
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
                {dano ? <p className='itemDica-sub-titulo'>Dano: {dano}</p> : null}
                {alcance ? <p className='itemDica-sub-titulo'>Alcance: {alcance}</p> : null}
                {cadencia ? <p className='itemDica-sub-titulo'>Cadência: {cadencia}</p> : null}
                {recarga ? <p className='itemDica-sub-titulo'>Recarga: {recarga}</p> : null}
                {precisao ? <p className='itemDica-sub-titulo'>Precisão: {precisao}</p> : null}
            </Col>
        </Row>
    );
}

export default ItemDica;