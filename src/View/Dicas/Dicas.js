import React from 'react';
import { Row } from 'react-bootstrap';
import './Dicas.css';
import ComponentBotaoTopo from './../../Components/BotaoTopo/BotaoTopo';
import ComponentCard from './../../Components/Card/Card';
import constDicas from './../../Helpers/Data/ConstDicas';
const Dicas = (props) => {

    return (
        <div className='Dicas-background'>
            <Row>
                {constDicas.DICAS.map((dica) => (
                    <ComponentCard
                        key={dica.id}
                        imagem={dica.imagem}
                        altImagem={dica.alt}
                        titulo={dica.titulo}
                        texto={dica.texto}
                    />
                ))}

            </Row>
            <ComponentBotaoTopo />
        </div >
    );
}

export default Dicas;