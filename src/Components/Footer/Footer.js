import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import linkRota from './../../Helpers/Const/Links';

import './Footer.css';

const Footer = (props) => {

    function redirecionarLinkExterno(link){
        window.location.href =  link
    }

    return (
        <footer className='footer-container'>
            <Row className='footer-row'>
                <Col className='footer-col'>
                    <ul>
                        <li onClick={() => redirecionarLinkExterno(linkRota.sobreProjeto)}>Sobre o projeto</li>
                        <li onClick={() => redirecionarLinkExterno(linkRota.contribuir)}>Contribuir</li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li onClick={() => redirecionarLinkExterno(linkRota.linkedin)}>Linkedin</li>
                        <li onClick={() => redirecionarLinkExterno(linkRota.git)}>Git</li>
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <ul>
                        <li onClick={() => redirecionarLinkExterno(linkRota.instagram)}>Instagram</li>
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