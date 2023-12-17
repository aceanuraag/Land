import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="home">Acetians</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w3-padding w3-display-topright">
            <Nav.Link href="#">
              <div className="w3-dropdown-hover">
                <button class="w3-button w3-small w3-white">
                  Partner Education
                </button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <Link href="#" className="w3-bar-item w3-button">
                    Link 1
                  </Link>
                  <Link href="#" className="w3-bar-item w3-button">
                    Link 2
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Link 3
                  </Link>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#"><div className="w3-dropdown-hover">
                <button class="w3-button w3-small w3-white">
                  Robotics
                </button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <Link href="#" className="w3-bar-item w3-button">
                    Link 1
                  </Link>
                  <Link href="#" className="w3-bar-item w3-button">
                    Link 2
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Link 3
                  </Link>
                </div>
              </div></Nav.Link>
            <Nav.Link href="#"><div className="w3-dropdown-hover">
                <button class="w3-button w3-small w3-white">
                  Industries
                </button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <Link href="#" className="w3-bar-item w3-button">
                    Healthcare
                  </Link>
                  <Link href="#" className="w3-bar-item w3-button">
                    Education
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Financial
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Public Sector
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Retail
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Utilities
                  </Link>
                </div>
              </div></Nav.Link>
            <Nav.Link href="#"><div className="w3-dropdown-hover">
                <button class="w3-button w3-small w3-white">
                  Services
                </button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <Link href="#" className="w3-bar-item w3-button">
                    Cloud Solution
                  </Link>
                  <Link href="#" className="w3-bar-item w3-button">
                    Consulting
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Infrastructure Solution
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Operational Support
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Digital Experience
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Infrastructure Managed Services
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Bussiness App
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Hardware Solution
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    Start Up Support
                  </Link>
                  <Link href="#" class="w3-bar-item w3-button">
                    OutSourcing
                  </Link>
                </div>
              </div></Nav.Link>
            <Nav.Link href="#"><div className="w3-dropdown-hover">
                <button class="w3-button w3-small w3-white w3-text-bold">
                  People
                </button>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                  <Link href="#" className="w3-bar-item w3-button">
                    Career
                  </Link>
                  <Link href="#" className="w3-bar-item w3-button">
                    Culture
                  </Link>
                  
                </div>
              </div></Nav.Link>
            

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="App-header p-5 flex items-center">
    //   <h1>This is Header Page</h1>
    // </div>
  );
};

export default Header;
