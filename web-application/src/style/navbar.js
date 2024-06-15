import {Container, Nav, Navbar} from 'react-bootstrap'

export const NavbarContainer = () => {
    return(
        <>
            <Navbar className='navbar-bgcolor'>
                <Container>
                    <Navbar.Brand href='home'>JaiRam</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href=''>Home</Nav.Link>
                        <Nav.Link href='createOrder'>CreateOrder</Nav.Link>
                        <Nav.Link href='dsamainview'>DSA Question</Nav.Link>
                        <Nav.Link href='mernTest'>Wings MERN</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}