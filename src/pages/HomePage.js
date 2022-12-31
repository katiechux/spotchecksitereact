import { Container, Col, Row } from 'reactstrap';
import image from '../app/assets/searchgraphic.png';

const HomePage = () => {
    return (
        <Container className='home-page'>
            <Row>
                <Col className='md-4 align-self-center text-center'>
                    <h1>Don't lose your spot</h1>
                </Col>
                <Col className='sm-8 align-self-center d-none d-md-block'>
                    <img src={image} alt='Spotcheck Graphic'/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;