import React, { useContext, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
const setActiveNavBarLink = (e) => {
  try {
    const navbar = e.target.closest(".navbar-nav");
    [...navbar.children].forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  } catch (error) {
    const navbar = document.querySelector(".navbar-nav");
    [...navbar.children].forEach((element) => {
      element.classList.remove("active");
    });
    navbar.firstChild.classList.add("active");
  }
};
export default function Navigationbar() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const handleLogin = (e) => {
    setActiveNavBarLink(e);
    if (auth?.loggedIn) {
      setAuth({});
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const handleLogoClick = (e) => {
    setActiveNavBarLink(e);
    navigate("/");
  };
  const handleAboutClick = (e) => {
    setActiveNavBarLink(e);
    navigate("/");
  };
  const handlePortfolioClick = (e) => {
    setActiveNavBarLink(e);
    navigate("/portfolio");
  };
  const handleUploadPhotos = (e) => {
    setActiveNavBarLink(e);

    navigate("/upload");
  };
  const handleEditPhotos = (e) => {
    setActiveNavBarLink(e);

    navigate("/current");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          Photographer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleAboutClick}>About</Nav.Link>
            <Nav.Link onClick={handlePortfolioClick}>Portfolio</Nav.Link>
            {auth?.loggedIn && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleEditPhotos}>
                  Edit photos
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleUploadPhotos}>
                  Upload photos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link onClick={handleLogin}>
              {auth?.loggedIn ? "Log out" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
