import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap'
 
const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <BootstrapNavbar 
      expand="lg" 
      className="fundink-navbar"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
          <div className="logo">
            <img src="/images/fundink-logo.svg" alt="Fundink Logo" className="logo-image" />
            <img src="/images/footer-logo.svg" alt="Fundink Logo" className="logo-image-new" />
          </div>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-nav-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`nav-link-item ${isActive('/') ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/product-services" 
              className={`nav-link-item ${isActive('/product-services') ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              Product & Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/how-it-works" 
              className={`nav-link-item ${isActive('/how-it-works') ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              How it Works
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/our-work" 
              className={`nav-link-item ${isActive('/our-work') ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
            >
              Our Work
            </Nav.Link>
          </Nav>
          
          <div className="navbar-actions">
            <Button 
              as={Link} 
              to="/coming-soon" 
              className="btn-active-calls"
            >
              Active Calls
            </Button>
            <Button 
              as={Link} 
              to="/signin" 
              variant="outline" 
              className="btn-signin"
            >
              Sign In
            </Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
