import React from 'react';
import { Button } from 'react-bootstrap';
import './BotaoTopo.css';


const BotaoTopo = (props) => {

    return (
        <div className='botaoTopo-container'>
            <Button className='botaoTopo' onClick={() => window.scrollTo(0, 0)}>
                Voltar pro topo
            </Button>
        </div>
    );
}

export default BotaoTopo;