import React from "react";
import { Row, Nav, Container } from "react-bootstrap";
import "./styles/_header.scss";


const Header = () => {
  return (
    <>
      <Container fluid className="Header">        
        <Row>
          <Nav activeKey="/home" class="navbar navbar-inverse">
            <Nav className="container-fluid">
              <Nav className="navbar-header">
                <Nav.Item>
                  <Nav.Link href="/home">Furniture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/home">Why Spruce</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/home">Search</Nav.Link>
                </Nav.Item>
              </Nav>

              <Nav className="navbar-right">
                <Nav.Item>
                  <Nav.Link href="/home">Wishlist</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Cart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Nav>
          </Nav>
        </Row>
      </Container>
    </>
  );
};

export default Header;
