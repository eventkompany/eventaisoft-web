import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title mb-5 fade-in">Get In Touch</h2>
            
            <div className="contact-email fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="email-icon mb-4">
                <i className="fas fa-envelope fa-4x text-white"></i>
              </div>
              <h3 className="text-white mb-4">Email Us</h3>
              <a 
                href="mailto:hello@eventaisoft.com" 
                className="email-link btn btn-outline-light btn-lg"
              >
                hello@eventaisoft.com
                <i className="fas fa-paper-plane ms-2"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
