import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e, target) => {
    e.preventDefault();
    setExpanded(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      element.classList.add("highlight-section");
      setTimeout(() => {
        element.classList.remove("highlight-section");
      }, 2000);
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-2 custom-navbar ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <div className="slide-in-left">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center text-white"
            onClick={(e) => handleClick(e, "home")}
          >
            <img
              src="/logo.png"
              alt="Eventai Soft Solutions"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end mobile-menu"
        >
          <div className="slide-in-right">
            <Nav>
              <Nav.Link
                href="#about"
                className="mx-2 fs-6 text-white nav-link"
                onClick={(e) => handleClick(e, "about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#broken"
                className="mx-2 fs-6 text-white nav-link"
                onClick={(e) => handleClick(e, "broken")}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                href="#broken"
                className="mx-2 fs-6 text-white nav-link"
                onClick={(e) => handleClick(e, "broken")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="mx-2 fs-6 text-white nav-link"
                onClick={(e) => handleClick(e, "contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
