import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Banking App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/accounts">Accounts</Nav.Link>
                    <Nav.Link href="/transactions">Transactions</Nav.Link>
                    <Nav.Link href="/credit-card">Credit Card</Nav.Link>
                    </Nav></Navbar.Collapse>
                    </Navbar>  );
                    };

                    export default Header;
