import React from 'react'
import { Link } from 'react-router-dom'
import MovingColumns from '/sections/MovingColumns';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const HomePage = () => {
  const sectors = [
    'Support', 'School Education', 'Sanitation', 'Cloud & DevOps',
    'Skill Development', 'Employability & Livelihood', 'Domestic Violence', 'Girl Child Development',
    'Mental Health', 'Disability Rehabilitation', 'STEM Education', 'Child Protection & Child Rights',
    'Women Empowerment', 'Gender Equality', 'Maternal & Child Health', 'Rural Livelihoods',
    'Scholarships & Fellowships', 'Preventive Healthcare'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">

        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={8}>
              <div className="hero-content">
                <h1 className="hero-title">
                  Simplifying Fund<img src="/images/i-logo.svg" alt="I Logo" className="logo-i" />ng
                  <span className="slide-to-right">Accelerating Impact.</span>
                </h1>
              </div>
            </Col>

            {/* RIGHT INFO CARD */}
            <Col lg={4}>
              <div className="hero-info-card">
                <img src="/images/info-line.svg" alt="Info Line" className="info-line" />
                <h4>Redefining Funding</h4>
                <p>
                  We simplify funding to a 1,000-word concept note, so great ideas
                  get funded faster. For Funders, we help in launching
                  well-defined funding calls with clear criteria and structured
                  evaluation.
                </p>

                <Link to="/how-it-works" className="see-link">
                  See how it works <img src="/images/fundink-logo.svg" alt="Arrow Right" className="arrow-right" />
                </Link>
              </div>
            </Col>

            {/* Glass CTA Card */}
            <div className="hero-cta-wrapper">
              <div className="hero-cta-card">

                {/* Moving border lines */}
                <div className="moving-line top-line"></div>
                <div className="moving-line bottom-line"></div>
                <div className="moving-line left-line"></div>
                <div className="moving-line right-line"></div>

                <div className="cta-block">
                  <h3>Launch a Cohort</h3>
                  <Button className="btn-outline-custom">
                    <span className="btn-outline-custom-text">Schedule a Call</span>
                  </Button>
                </div>

                <div className="cta-divider"></div>

                <div className="cta-block">
                  <h3>Apply in 1000 words</h3>
                  <Button className="btn-outline-custom">
                    <span className="btn-outline-custom-text">Let's Start</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="hero-banner">
              Less Paperwork. Better Decisions. Greater Impact.
            </div>

          </Row>
        </Container>
      </section>

      {/* Features Cards Section */}
      <section className="features-section">
        <Container>
          <Row className="features-row">
            <Col xl={3} lg={6} md={6} className="feature-col">
              <Card className="feature-card">
                <Card.Body>
                  <div>
                    <h3 className="feature-title">Ecosystem Enabler</h3>
                    <p className="feature-text">FundInk redefines funding by replacing long, unclear processes with structured calls, stage-wise applications, and merit-based evaluations that save time and improve decision-making for all.</p>
                  </div>
                  <Link to="/" className="expand-link">
                    Expand
                    <img src="/images/fundink-logo.svg" alt="Arrow Right" className="arrow-right-big" />
                  </Link>
                  <div className="feature-visual network-pattern-1"></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6} md={6} className="feature-col">
              <Card className="feature-card gradient-card">
                <Card.Body>
                  <div>
                    <h3 className="feature-title">Redefining Funding</h3>
                    <p className="feature-text">FundInk redefines funding by replacing long, unclear processes with structured calls, stage-wise applications, and merit-based evaluations that save time and improve decision-making for all.</p>
                  </div>
                  <Link to="/" className="expand-link">
                    Expand
                    <img src="/images/fundink-logo.svg" alt="Arrow Right" className="arrow-right-big" />
                  </Link>
                  <div className="feature-visual network-pattern-2"></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6} md={6} className="feature-col">
              <Card className="feature-card">
                <Card.Body>
                  <div>
                    <h3 className="feature-title">Maximizing Impact</h3>
                    <p className="feature-text">FundInk redefines funding by replacing long, unclear processes with structured calls, stage-wise applications, and merit-based evaluations that save time and improve decision-making for all.</p>
                  </div>
                  <Link to="/" className="expand-link">
                    Expand
                    <img src="/images/fundink-logo.svg" alt="Arrow Right" className="arrow-right-big" />
                  </Link>
                  <div className="feature-visual network-pattern-3"></div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6} md={6} className="feature-col">
              <Card className="feature-card">
                <Card.Body>
                  <div>
                    <h3 className="feature-title">Outreach and Visibility</h3>
                    <p className="feature-text">FundInk redefines funding by replacing long, unclear processes with structured calls, stage-wise applications, and merit-based evaluations that save time and improve decision-making for all.</p>
                  </div>
                  <Link to="/" className="expand-link">
                    Expand
                    <img src="/images/fundink-logo.svg" alt="Arrow Right" className="arrow-right-big" />
                  </Link>
                  <div className="feature-visual network-pattern-4"></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <Container>
          <h2 className="section-title text-center">What We <span>Offer To Accelerate Impact</span></h2>
          {/* <div className="browser-mockup">
            <div className="browser-header">
              <div className="d-flex gap-3 align-items-center">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-controls">
                  <img src="/images/ios-window.svg" alt="control-icon" className="control-icon" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
              <div className="browser-url"><p>https://fundink.in/</p><img src="/images/refresh.svg" alt="Refresh Icon" className="refresh-icon" /></div>
              <div className="browser-add">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
            <div className="browser-content">
              <div className="mini-navbar">
                <span className="mini-logo">FundInk</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </div>
              <Row className="offer-cards-row">
                <Col md={6}>
                  <div className="offer-card funders-card">
                    <div className="offer-card-header">
                      <h4>Funders</h4>
                      <span className="offer-subtitle">CSR/Investor/Philanthropy/Family Office</span>
                    </div>
                    <div className="offer-card-body">
                      <ul>
                        <li><span className="bullet"></span>End-to-End Application Planning</li>
                        <li><span className="bullet"></span>Dedicated Application Microsite</li>
                        <li><span className="bullet"></span>Fully Automated Application</li>
                        <li><span className="bullet"></span>Plug-and-Play Model</li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="offer-card seekers-card">
                    <div className="offer-card-header">
                      <h4>Fund-Seekers</h4>
                      <span className="offer-subtitle">NGO/Startup/Entrepreneur/Innovator</span>
                    </div>
                    <div className="offer-card-body">
                      <ul>
                        <li><span className="bullet"></span>Apply in 1000 words</li>
                        <li><span className="bullet"></span>Clear Application Timelines</li>
                        <li><span className="bullet"></span>Actionable Feedback on Result</li>
                        <li><span className="bullet"></span>Year-Round Funding Opportunities</li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div> */}
          <div className="whole-section-image">
            <img src="/images/whole-section.svg" alt="Offer Section" className="offer-section-visual" />
          </div>
        </Container>
      </section>

      {/* Sectors Section */}
      <section className="sectors-section">
        <Container>
          <h2 className="section-title text-center">Sectors Where <span>We Enable Impact</span></h2>
          {/* <div className="sectors-cloud">
            {sectors.map((sector, index) => (
              <span key={index} className={`sector-tag sector-${index % 5}`}>
                {sector}
              </span>
            ))}
          </div> */}
          <MovingColumns />
        </Container>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <Container>
          <h2 className="section-title text-center">Trusted by <span>Industry Leaders</span></h2>
          <p className="section-subtitle text-center">
            FundInk enables corporate and institutional funders to design focused funding programs, reach credible applicants, evaluate efficiently, and deploy capital where it delivers measurable and lasting impact.
          </p>
          <div className="partners-logos">
            <div className="partner-logo startup-india">
              <img src="/images/trusted-1.png" alt="Startup India Logo" className="partner-logo-img" />
            </div>
            <div className="partner-logo m3m-foundation">
              <img src="/images/trusted-2.png" alt="M3M Foundation Logo" className="partner-logo-img" />
            </div>
            <div className="partner-logo inshakti">
              <img src="/images/trusted-3.png" alt="Inshakti Logo" className="partner-logo-img" />
            </div>
          </div>
        </Container>
      </section>

      {/* Register Section */}
      <section className="register-section">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="register-info">
                <h2 className="register-title">Register with us</h2>
                <p className="register-desc">
                  Discover funding opportunities, launch structured funding calls, and connect with the right partners to create meaningful, measurable impact.
                </p>
                <div className="home-register-highlight">
                  <h5 className="contact-card-head">Join India's most innovative funding platform</h5>
                  <p className="home-register-text-muted">
                    Transform your funding approach with enterprise-grade infrastructure designed for maximum impact and transparency.
                  </p>

                  <div className="row info-div">
                    <div className="col-xl-6 col-12 border-on-right">
                      <h6 className="contact-small-head">Contact Us</h6>
                      <p className="home-contact-text">
                        <img className="" src="/images/fill-mail.svg" alt="Email Icon" />
                        <span>info@fundink.in</span>
                      </p>
                      <p className="home-contact-text pt-4">
                        <img className="" src="/images/ring-phone.svg" alt="Phone Icon" />
                        <span>+91 98765 43210</span>
                      </p>
                    </div>
                    <div className="col-xl-6 col-12 d-flex flex-column align-items-center">
                      <h6 className="contact-small-head">Social Media</h6>
                      <div className="d-flex gap-2">

                        <a href="/" className="text-white text-decoration-none d-flex align-items-center justify-content-center home-social-icon">
                          <img src="/images/circle-mail.svg" alt="Email Icon" />
                        </a>

                        <a href="/" className="text-white text-decoration-none d-flex align-items-center justify-content-center home-social-icon">
                          <img src="/images/circle-twit.svg" alt="Twitter Icon" />
                        </a>

                        <a href="/" className="text-white text-decoration-none d-flex align-items-center justify-content-center home-social-icon">
                          <img src="/images/circle-link.svg" alt="LinkedIn Icon" />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="register-form-wrapper">
                <h3 className="form-title">Get Started with FundInk</h3>
                <Form onSubmit={handleSubmit} className="register-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Organization Name *</Form.Label>
                        <Form.Control type="text" placeholder="Enter organization name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Contact Person *</Form.Label>
                        <Form.Control type="text" placeholder="Enter contact person name" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email address" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone number" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="form-group">
                    <Form.Label>Are you a *</Form.Label>
                    <Form.Select required>
                      <option value="">Select</option>
                      <option value="funder">Funder</option>
                      <option value="fund-seeker">Fund Seeker</option>
                      <option value="partner">Partner</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>How did you hear about us? *</Form.Label>
                    <Form.Select required>
                      <option value="">Select</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Tell us about your requirement? *</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Tell us more" required />
                  </Form.Group>
                  <Button type="submit" className="btn-submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default HomePage
