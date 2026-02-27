import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MovingColumns from '/sections/MovingColumns';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const SignInPage = () => {

  const [organizationName, setOrganizationName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");      // Fund Seeker / Funder / Partner
  const [hearAbout, setHearAbout] = useState("");    // Social / Search / Referral
  const [requirement, setRequirement] = useState("");

  const sectors = [
    'Support', 'School Education', 'Sanitation', 'Cloud & DevOps',
    'Skill Development', 'Employability & Livelihood', 'Domestic Violence', 'Girl Child Development',
    'Mental Health', 'Disability Rehabilitation', 'STEM Education', 'Child Protection & Child Rights',
    'Women Empowerment', 'Gender Equality', 'Maternal & Child Health', 'Rural Livelihoods',
    'Scholarships & Fellowships', 'Preventive Healthcare'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      organizationName,
      contactPerson,
      email,
      phone,
      userType,        // Fund Seeker / Funder / Partner
      hearAbout,       // Social Media / Search Engine / Referral
      requirement
    };

    try {
      const res = await fetch("https://formspree.io/f/xeeldovz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Form submitted successfully ✅");
      } else {
        alert("Submission failed ❌");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="homepage">

      {/* Register Section */}
      <section className="register-section">
        <Container>
          <Row className="between-gap-in">
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
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 border-on-right">
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
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex flex-column align-items-center">
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
                        <input type="text" className="form-control" placeholder="Enter organization name" value={organizationName} onChange={e => setOrganizationName(e.target.value)} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Contact Person *</Form.Label>
                        <input type="text" className="form-control" placeholder="Enter contact person name" value={contactPerson} onChange={e => setContactPerson(e.target.value)} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Email Address *</Form.Label>
                        <input type="email" className="form-control" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Phone Number *</Form.Label>
                        <input type="tel" className="form-control" placeholder="Enter phone number" value={phone} onChange={e => setPhone(e.target.value)} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="form-group">
                    <Form.Label>Are you a *</Form.Label>
                    <div className="custom-select-wrapper">
                      <select className="form-select" value={userType} onChange={e => setUserType(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Fund Seeker">Fund Seeker</option>
                        <option value="Funder">Funder</option>
                        <option value="Partner">Partner</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label>How did you hear about us? *</Form.Label>
                    <div className="custom-select-wrapper">
                      <select className="form-select" value={hearAbout} onChange={e => setHearAbout(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Tell us about your requirement? *</Form.Label>
                    <textarea className="form-control" placeholder="Tell us more" rows={2} value={requirement} onChange={e => setRequirement(e.target.value)} required />
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

export default SignInPage
