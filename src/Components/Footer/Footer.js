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
                        <li><Link to='/404'>Dúvidas?</Link></li>
                        <li><Link to='/404'>Sobre o projeto</Link></li>
                        <li><Link to='/404'>Direitos autorais</Link></li>
                        <li><Link to='/404'>Autor</Link></li>
                        <li><Link to='/404'>Original</Link></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Contribuir</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li >
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Contato</Link></li>
                        <li><Link to='/404'>Linkedin</Link></li>
                        <li><Link to='/404'>Instagram</Link></li>
                        <li><Link to='/404'>Git</Link></li>
                        <li><Link to='/404'>Email</Link></li>
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <ul>
                        <li><Link to='/404'>Lorem Ipsum</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li>
                        <li><Link to='/404'>Lorem Ipsum is simply dummy</Link></li >
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