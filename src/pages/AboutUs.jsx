import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const AboutUs = () => {
  const values = [
    {
      title: 'Transparency',
      description: 'We believe in complete transparency in the funding process, ensuring every applicant understands the criteria and evaluation process.',
      icon: 'transparency'
    },
    {
      title: 'Efficiency',
      description: 'Our platform streamlines the entire funding journey, reducing paperwork and saving valuable time for both funders and applicants.',
      icon: 'efficiency'
    },
    {
      title: 'Impact',
      description: 'We are committed to maximizing social impact by connecting the right funders with the most promising initiatives.',
      icon: 'impact'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions that transform how funding is accessed and distributed.',
      icon: 'innovation'
    }
  ]

  const milestones = [
    { year: '2020', event: 'FundInk founded with a vision to transform funding' },
    { year: '2021', event: 'Launched first cohort with 50+ organizations' },
    { year: '2022', event: 'Expanded to 15+ sectors across India' },
    { year: '2023', event: 'Partnered with leading CSR foundations' },
    { year: '2024', event: 'Reached 1000+ successful funding connections' },
    { year: '2026', event: 'India\'s most innovative funding platform' }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h1 className="about-hero-title">About FundInk</h1>
              <p className="about-hero-subtitle">
                Simplifying Funding. Accelerating Impact.
              </p>
              <p className="about-hero-desc">
                FundInk is India's most innovative funding platform, dedicated to transforming 
                how social impact projects receive funding. We bridge the gap between funders 
                and fund-seekers through technology-driven solutions that make the funding 
                process transparent, efficient, and impactful.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mission-content">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-text">
                  To democratize access to funding for social impact organizations by simplifying 
                  the application process and creating a transparent, merit-based evaluation system 
                  that connects great ideas with the resources they need to succeed.
                </p>
                <p className="mission-text">
                  We envision a world where every impactful initiative, regardless of size or 
                  background, has equal opportunity to access the funding required to create 
                  meaningful change in their communities.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mission-visual">
                <div className="mission-circle">
                  <div className="inner-circle">
                    <span className="mission-stat">1000+</span>
                    <span className="mission-label">Words Only</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <h2 className="section-title text-center">Our Core Values</h2>
          <Row className="values-row">
            {values.map((value, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="value-card">
                  <Card.Body>
                    <div className={`value-icon ${value.icon}`}>
                      {value.icon === 'transparency' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                      {value.icon === 'efficiency' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                      )}
                      {value.icon === 'impact' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      )}
                      {value.icon === 'innovation' && (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      )}
                    </div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-desc">{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <Container>
          <h2 className="section-title text-center">How FundInk Works</h2>
          <Row className="process-row">
            <Col lg={4} md={4}>
              <div className="process-step">
                <div className="step-number">01</div>
                <h4>Create Profile</h4>
                <p>Register your organization and create a compelling profile that showcases your work and impact.</p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="process-step">
                <div className="step-number">02</div>
                <h4>Apply in 1000 Words</h4>
                <p>Submit your concept note in just 1000 words. No lengthy proposals or complicated paperwork.</p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="process-step">
                <div className="step-number">03</div>
                <h4>Get Funded</h4>
                <p>Connect with the right funders, receive feedback, and secure funding for your initiatives.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <Container>
          <h2 className="section-title text-center">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <p className="timeline-event">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <h2 className="section-title text-center">Meet Our Team</h2>
          <p className="section-subtitle text-center">
            A dedicated team of professionals passionate about creating social impact
          </p>
          <Row className="team-row justify-content-center">
            <Col lg={4} md={6}>
              <Card className="team-card">
                <div className="team-avatar">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <Card.Body className="text-center">
                  <h5 className="team-name">Leadership Team</h5>
                  <p className="team-role">Founders & Directors</p>
                  <p className="team-bio">Visionaries with decades of experience in social impact, finance, and technology.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="team-card">
                <div className="team-avatar">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <Card.Body className="text-center">
                  <h5 className="team-name">Operations Team</h5>
                  <p className="team-role">Program Managers</p>
                  <p className="team-bio">Dedicated professionals ensuring smooth execution of funding programs.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="team-card">
                <div className="team-avatar">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <Card.Body className="text-center">
                  <h5 className="team-name">Tech Team</h5>
                  <p className="team-role">Engineers & Designers</p>
                  <p className="team-bio">Building the technology that powers seamless funding experiences.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <Container>
          <div className="cta-box">
            <h2>Ready to Transform Your Funding Journey?</h2>
            <p>Join thousands of organizations already using FundInk to accelerate their impact.</p>
            <div className="cta-buttons">
              <a href="/register" className="btn-primary-cta">Get Started</a>
              <a href="/contact" className="btn-secondary-cta">Contact Us</a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutUs
