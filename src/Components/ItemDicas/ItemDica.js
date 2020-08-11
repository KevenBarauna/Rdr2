import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import ComponentCarousel from './../Carousel/Carousel';
import './ItemDica.css';

const ItemDica = (props) => {
    const {
        titulo, //TITULO DO TEXTO  [STRING]
        subTitulo, //SUBTITULO DO TEXTO [STRING]
        imagem, //IMAGEM [ARRAY]
    } = props;


    return (
        <Row className='itemDica-background'>
            <Col sm={6} md={6} lg={6}>
                <Carousel>
                    {imagem.map((img, index) => (
                        <Carousel.Item>
                            <ComponentCarousel
                                imagem={img.imagem}
                                altImagem={img.alt}
                                titulo={img.titulo}
                                subTitulo={img.subTitulo}
                            />
                        </Carousel.Item>
                    ))}

                </Carousel>
            </Col >
            <Col sm={6} md={6} lg={6}>
                <p className='itemDica-titulo'>{titulo}</p>
                <p className='itemDica-sub-titulo'>{subTitulo}</p>
            </Col>
        </Row>
    );
}

export default ItemDica;