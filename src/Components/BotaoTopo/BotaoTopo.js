import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './BotaoTopo.css';
import imagemSetaTopo from './../../assets/imagem/seta-topo.gif';

const BotaoTopo = (props) => {
    return (
        <div className='botaoTopo-container'>
            <OverlayTrigger className='botaoTopo-container' overlay={<Tooltip id="tooltip-topo">Voltar pro topo</Tooltip>}>
                <Button id='tooltip-topo' variant="danger" className='botaoTopo' onClick={() => window.scrollTo(0, 0)}>
                    <img src={imagemSetaTopo} alt='topo' style={{ height: '51px' }} ></img>
                </Button>
            </OverlayTrigger>
        </div>
    );
}

export default BotaoTopo;