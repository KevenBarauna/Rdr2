import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import imagemLogo from './../../assets/imagem/logo.png'
import './Topo.css';

const Topo = (props) => {

    return (
        <header className='topo-header'>
            <Row style={{ padding: '10px' }}>
                <Col className='topo-div-imagem' sm={12} md={4} lg={4}>
                    <Link to='/home'>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo' ></img>
                    </Link>
                </Col>
                <Col className='topo-nav' sm={12} md={7} lg={7}>
                    <Row className='topo-item'>
                        <li><Link to='/404'>Mapa</Link></li>
                        <li><Link to='/armas'>Armas</Link></li>
                        <li><Link to='/404'>Tesouros</Link></li>
                        <li><Link to='/404'>Cartas</Link></li>
                        <li><Link to='/404'>Roupas</Link></li>
                        <li><Link to='/404'>Missões</Link></li>
                    </Row>
                </Col>
                <Col className='topo-nav' sm={12} md={1} lg={1}>
                    <Row className='topo-item topo-btn-login'>
                        <Link to='/login'>
                            <Button variant="outline-danger">Login</Button>{' '}
                        </Link>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Topo;