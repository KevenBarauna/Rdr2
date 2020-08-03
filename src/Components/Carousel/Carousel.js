import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Carousel.css';


const Carrossel = (props) => {
    const {
        imagem,
        altImagem,
        titulo,
        subTitulo,
        link,
    } = props

    return (

        <Link to={link}>
            <img className='dica-imagem' src={imagem} alt={altImagem}></img>
            <Carousel.Caption>
                <h3>{titulo}</h3>
                <p>{subTitulo}</p>
            </Carousel.Caption>
        </Link>

    );
}

export default Carrossel;