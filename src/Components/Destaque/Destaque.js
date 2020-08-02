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


    return (
        <Row className='destaque-background'>
            <Col sm={12} md={6} lg={6}>
                {padrao === true ? (
                    <>
                        <p className='destaque-titulo' style={{ marginLeft: '50%' }}>{titulo}</p>
                        <p className='destaque-sub-titulo' style={{ marginLeft: '50%' }}>{subTitulo}</p>
                    </>
                ) : (
                        <img className='destaque-imagem' style={{ marginLeft: '41%' }} src={imagem} alt={altImagem}></img>
                    )}
            </Col >
            <Col sm={12} md={6} lg={6}>
                {padrao === true ? (
                    <img className='destaque-imagem' src={imagem} alt={altImagem}></img>
                ) : (
                        <>
                            <p className='destaque-titulo' style={{ marginRight: '50%' }}>{titulo}</p>
                            <p className='destaque-sub-titulo' style={{ marginRight: '50%' }}>{subTitulo}</p>
                        </>
                    )}
            </Col>
        </Row>
    );
}

export default Destaque;