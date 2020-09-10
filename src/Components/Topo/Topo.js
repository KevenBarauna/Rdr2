import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import imagemLogo from './../../assets/imagem/logo.png'
import PerfilTopoUsuario from './PerfilTopoUsuario/PerfilTopoUsuario';
import linkRota from './../../Helpers/Const/Links';
import './Topo.css';

const Topo = (props) => {

    return (
        <header className='topo-header'>
            <Row style={{ padding: '10px' }}>
                <Col className='topo-div-imagem' sm={12} md={4} lg={4}>
                    <Link to={linkRota.home}>
                        <img id='pontoZero' className='topo-imagem-logo' src={imagemLogo} alt='logo' ></img>
                    </Link>
                </Col>
                <Col className='topo-nav' sm={12} md={7} lg={7}>
                    <Row className='topo-item'>
                        <li><Link to={linkRota.mapa}>Mapa</Link></li>
                        <li><Link to={linkRota.armas}>Armas</Link></li>
                        <li><Link to={linkRota.roupas}>Roupas</Link></li>
                        <li><Link to={linkRota.musicas}>Músicas</Link></li>
                        <li><Link to={linkRota.dicas}>Dicas</Link></li>
                    </Row>
                </Col>
                <Col className='topo-nav' sm={12} md={1} lg={1}>
                    <Row className='topo-item topo-btn-login'>
                        <PerfilTopoUsuario />
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Topo;