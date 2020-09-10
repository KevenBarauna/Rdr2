import React from 'react';
import { Row, Figure } from 'react-bootstrap';
import './Roupas.css';
import constRoupa from './../../Helpers/Data/ConstRouas';
const Roupas = (props) => {

    return (
        <div className='Roupas-background'>
            <Row>
                {constRoupa.ROUPAS.map((r) => (
                    <Figure className='Roupas-figura' key={r.id}>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt={r.alt}
                            src={r.imagem}
                        />
                        <Figure.Caption className='Roupas-texto'>
                            {r.texto}
                        </Figure.Caption>
                        <Figure.Caption className='Roupas-localizacao'>
                            {r.localizacao}
                        </Figure.Caption>
                    </Figure>
                ))}

            </Row>
        </div >
    );
}

export default Roupas;