import React from 'react'
import { Link } from 'react-router-dom'
import MovingColumns from '/sections/MovingColumns';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

const ComingSoonPage = () => {
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
      <section className="hero-section coming-soon">

        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={12}>
              <div className="hero-content">
                <h1 className="coming-soon-title">
                  Coming Soon...
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default ComingSoonPage
