import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer pt-3'>
            <Container>
                <Row>
                    <Col>
                        <h5>Spotcheck</h5>
                        <ul className='list-unstyled'>
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                Appexchange
                            </li>
                            <li>
                                Open a Case
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>Resources</h6>
                        <ul className='list-unstyled'>
                            <li>Administration</li>
                            <li>Configuration</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col>
                        <h6>Follow us!</h6>
                        <i className='fa fa-instagram me-1'/>
                        <i className='fa fa-facebook me-1'/>
                        <i className='fa fa-linkedin me-1'/>
                        <i className='fa fa-youtube me-1'/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;