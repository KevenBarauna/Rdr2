import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.css';

const CardDicas = (props) => {
    const {
        imagem,
        altImagem,
        titulo,
        texto,
    } = props

    return (
        <Card className='card-card'>
            <img src={imagem} alt={altImagem} className='card-imagem'></img>
            <Card.Body>
                <Card.Title className='card-titulo'>{titulo}</Card.Title>
                <Card.Text>
                    {texto}
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default CardDicas;