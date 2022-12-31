import { Container, Navbar, NavbarBrand } from 'reactstrap';
import logo from '../app/assets/spotchecklogo.png';

const Header = () => {
    return(
        <Navbar dark color='primary' sticky='top' expand='md'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={logo} alt='nucamp logo' className='logo'/>
                </NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Header;