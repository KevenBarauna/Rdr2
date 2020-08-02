import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import imagemLogo from './../../assets/imagem/logo.png'
import './Topo.css';

const Topo = (props) => {
    const {

    } = props;


    return (
        <header className='topo-header'>
            <Row style={{ padding: '10px' }}>
                <Col className='topo-div-imagem' sm={12} md={4} lg={4}>
                    <Link>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo' ></img>
                    </Link>
                </Col>
                <Col className='topo-nav' sm={12} md={7} lg={7}>
                    <Row className='topo-item'>
                        <li><Link>Mapa</Link></li>
                        <li><Link>Armas</Link></li>
                        <li><Link>Tesouros</Link></li>
                        <li><Link>Cartas</Link></li>
                        <li><Link>Roupas</Link></li>
                        <li><Link>Missões</Link></li>
                    </Row>
                </Col>
                <Col className='topo-nav' sm={12} md={1} lg={1}>
                    <Row className='topo-item topo-btn-login'>
                        <Link>
                            <Button variant="outline-danger">Login</Button>{' '}
                        </Link>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Topo;