import { Container, Navbar, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';
import logo from '../app/assets/spotchecklogo.png';
import OpenCaseForm from './OpenCaseForm';

const Header = () => {
    return(
        <Navbar sticky='top' expand='md' className='header pt-4'>
            <NavbarBrand href='/'>
                <img src={logo} alt='spotcheck logo' className='logo float-start mx-3'/>
                <h2 className='mt-1'>Spotcheck</h2>
            </NavbarBrand>
            <Collapse isOpen='false' navbar>
                <Container>
                    <Nav className='justify-content-center' navbar>
                        <NavItem className='nav-link link'>
                            Features
                        </NavItem>
                        <NavItem className='nav-link link'>
                            Resources
                        </NavItem>
                        <NavItem className='nav-link link'>
                            Pricing
                        </NavItem>
                        <NavItem className='nav-link link'>
                            About
                        </NavItem>
                    </Nav>
                </Container>
            </Collapse>
            <OpenCaseForm/>
        </Navbar>
    );
};

export default Header;