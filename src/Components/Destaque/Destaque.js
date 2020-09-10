import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Destaque.css';

const Destaque = (props) => {
    const {
        titulo, //TITULO DO TEXTO  [STRING]
        subTitulo, //SUBTITULO DO TEXTO [STRING]
        imagem, //IMAGEM [IMAGEM]
        altImagem, //ALT QUE APARECE NA IMAGEM [STRING]
        padrao, //TRUE = IMAGEM ESQUERDA | FALSE = IMAGEM DIREITA [BOOL]
    } = props;

    const renderEsquerda = () => (
     <>
        <Col sm={12} md={6} lg={6}>
            <p className='destaque-titulo' style={{ marginLeft: '50%' }}>{titulo}</p>
            <p className='destaque-sub-titulo' style={{ marginLeft: '50%' }}>{subTitulo}</p>
        </Col >
        <Col sm={12} md={6} lg={6}>
            <img className='destaque-imagem' src={imagem} alt={altImagem}></img>
        </Col>
     </>
    )

    const renderDireita = () => (
        <>
            <Col sm={12} md={6} lg={6}>
                <img className='destaque-imagem' style={{ marginLeft: '41%' }} src={imagem} alt={altImagem}></img>
            </Col >
            <Col sm={12} md={6} lg={6}>
                <p className='destaque-titulo' style={{ marginRight: '50%' }}>{titulo}</p>
                <p className='destaque-sub-titulo' style={{ marginRight: '50%' }}>{subTitulo}</p>
            </Col>
        </>
    )


    return (
        <Row className='destaque-background'>
            {padrao === true ? (renderEsquerda()) : (renderDireita())}
        </Row>
    );
}

export default Destaque;