import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  
    const isActive = (path) => location.pathname === path
  return (
    <footer className="fundink-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/footer-logo.svg" alt="FundInk Logo" className="footer-logo" />
          </div>
          <div className="footer-tagline">
            <span>Simplifying Funding. Accelerating Impact.</span>
            <img src="/images/fundink-logo.svg" alt="Tagline Icon" className="footer-icon" />
          </div>
        </div>
        
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className={`${isActive('/') ? 'active' : ''}`}>About us</Link></li>
              <li><Link to="#" className={`${isActive('/register') ? 'active' : ''}`}>Register Now</Link></li>
              <li><Link to="#" className={`${isActive('/funding-opportunities') ? 'active' : ''}`}>Funding Opportunities</Link></li>
              <li><Link to="#" className={`${isActive('/jobs') ? 'active' : ''}`}>Job Opportunities</Link></li>
              <li><Link to="#" className={`${isActive('/blog') ? 'active' : ''}`}>Impact Blog</Link></li>
            </ul>
          </Col>
          
          <Col lg={5} md={6} className="footer-column">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="footer-contact">
              <p>For Partnership: write at <a href="mailto:komal@fundink.in">komal@fundink.in</a></p>
              <p>For Internship & Job opportunities, write at <a href="mailto:careers@fundink.in">careers@fundink.in</a></p>
              <p>If you are a Startup: <a href="#" className="whatsapp-link">Join our WhatsApp Community</a></p>
              <p>If you are an NGO: <a href="#" className="whatsapp-link">Join our WhatsApp Community</a></p>
            </div>
          </Col>
          
          <Col lg={3} md={12} className="footer-column">
            <h4 className="footer-title">Reach Us</h4>
            <div className="footer-address">
              <p className="company-name">FundInk Innovations Private Limited</p>
              <p><strong>Address:</strong> 2nd floor, Eldeco Centre, Shivalik Colony, Malviya Nagar, New Delhi - 110017</p>
              <p><strong>Email:</strong> <a href="mailto:info@fundink.in">info@fundink.in</a> | <strong>Mobile:</strong> <a href="tel:+917982517617">+91 7982517617</a></p>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 FundInk</p>
          <div className="footer-legal">
            <Link to="#">Terms of Use</Link>
            <span className="separator">|</span>
            <Link to="#">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="#">Cookies Setting</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
