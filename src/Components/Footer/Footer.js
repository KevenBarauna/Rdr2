import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import linkRota from './../../Helpers/Const/Links';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => {


    return (
        <footer className='footer-container'>
            <Row className='footer-row'>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to={linkRota.duvidas}>Dúvidas?</Link></li>
                        <li><Link to={linkRota.sobreProjeto}>Sobre o projeto</Link></li>
                        <li><Link to={linkRota.direitosAutorais}>Direitos autorais</Link></li>
                        <li><Link to={linkRota.autor}>Autor</Link></li>
                        <li><Link to={linkRota.original}>Original</Link></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to={linkRota.contribuir}>Contribuir</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li >
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to={linkRota.contato}>Contato</Link></li>
                        <li><Link to={linkRota.linkedin}>Linkedin</Link></li>
                        <li><Link to={linkRota.instagram}>Instagram</Link></li>
                        <li><Link to={linkRota.git}>Git</Link></li>
                        <li><Link to={linkRota.email}>Email</Link></li>
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <ul>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to={linkRota.loremIpsum}>Lorem Ipsum is simply dummy</Link></li >
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