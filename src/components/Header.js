import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import React from 'react';
//import Registration from './Registration';

function Header() {
  return (
    
    <>
      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Home" >IndiaTour</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Registration">Registration</Nav.Link>

            <Nav variant="pills" defaultActiveKey="/home"></Nav>
            <Nav.Item>
                <Nav.Link href="/Signin" className='ss' style={{ color: "#fff" }}>Sign in</Nav.Link>
            </Nav.Item>
            <Nav.Link href="/Search" className='ss' style={{ color: "#fff" }}>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br /> */}
      <nav class="navbar navbar-dark bg-primary">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="?Home">INDIA TOUR & TRAVELS ✈️🌍</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home">Home 🏠</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 🔗</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true\">⬇️</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>
      </>
    
  );
}

export default Header;