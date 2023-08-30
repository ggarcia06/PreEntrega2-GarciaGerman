import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/"><img src={ logo } className="logo" alt="logo" />
</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/category/componentesdePC">Componentes de PC</Nav.Link>
                    <Nav.Link href="/category/accesorios">Accesorios</Nav.Link>
                    <Nav.Link href="/category/impresoras">Impresoras</Nav.Link>
                    <Nav.Link href="/category/almacenamiento">Almacenamiento</Nav.Link>
                    <Nav.Link href="/category/conectividad">Conectividad</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>

        </Navbar>
    )
}

export default NavBar

