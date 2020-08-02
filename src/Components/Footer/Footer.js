import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => {


    return (
        <footer className='footer-container'>
            <Row className='footer-row'>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Dúvidas? Ligue 0800-761-4631</Link></li>
                        <li><Link to='/404'>Perguntas frequentes</Link></li>
                        <li><Link to='/404'>Relações com investidores</Link></li>
                        <li><Link to='/404'>Formas de assistir</Link></li>
                        <li><Link to='/404'>Informações corporativas</Link></li>
                        <li><Link to='/404'>Originais Netflix</Link></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Centro de ajuda</Link></li>
                        <li><Link to='/404'>Carreiras</Link></li>
                        <li><Link to='/404'>Termos de uso</Link></li>
                        <li><Link to='/404'>Entre em contato</Link></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Conta</Link></li>
                        <li><Link to='/404'>Resgatar cartão pré-pago</Link></li>
                        <li><Link to='/404'>Privacidade</Link></li>
                        <li><Link to='/404'>Teste de velocidade</Link></li>
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Imprensa</Link></li>
                        <li><Link to='/404'>Comprar cartão pré-pago</Link></li>
                        <li><Link to='/404'>Preferências de cookies</Link></li>
                        <li><Link to='/404'>Avisos legais</Link></li >
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" defaultValue="Português">
                            <option>Português</option>
                            <option>English</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row >
        </footer >
    );
}

export default Footer;