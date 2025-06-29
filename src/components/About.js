import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title fade-in">Who We Are</h2>
            <p
              className="lead text-white fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Technology enthusiasts dedicated to solving complex problems with
              innovative solutions
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Tech Expertise */}
          <Col lg={6} className="fade-in">
            <div className="about-card h-100 p-4 p-lg-5">
              <div className="icon-box mb-4">
                <i className="fas fa-laptop-code fa-3x text-accent"></i>
              </div>
              <h3 className="text-white mb-3">Technology Agnostic</h3>
              <p className="text-white">
                Our talented team thrives on technological challenges. Whether
                you need:
              </p>
              <ul className="tech-list text-white">
                <li>
                  <i className="fas fa-check-circle me-2 text-accent"></i> Web &
                  Mobile development
                </li>
                <li>
                  <i className="fas fa-check-circle me-2 text-accent"></i> AI/ML
                  solutions
                </li>
                <li>
                  <i className="fas fa-check-circle me-2 text-accent"></i> Cloud
                  architecture
                </li>
                <li>
                  <i className="fas fa-check-circle me-2 text-accent"></i>{" "}
                  DevOps automation
                </li>
                <li>
                  <i className="fas fa-check-circle me-2 text-accent"></i>{" "}
                  Legacy system modernization
                </li>
              </ul>
              <p className="text-white mt-3">
                We adapt to your tech stack and deliver exceptional results.
              </p>
            </div>
          </Col>

          {/* Event Automation */}
          <Col lg={6} className="fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="about-card h-100 p-4 p-lg-5">
              <div className="icon-box mb-4">
                <i className="fas fa-robot fa-3x text-accent"></i>
              </div>
              <h3 className="text-white mb-3">Event Automation Specialists</h3>
              <p className="text-white">
                We are here to build cutting-edge tools that revolutionize event
                management:
              </p>
              <ul className="tech-list text-white">
                <li>
                  <i className="fas fa-bolt me-2 text-accent"></i> Automated
                  attendee management
                </li>
                <li>
                  <i className="fas fa-bolt me-2 text-accent"></i> Smart
                  scheduling algorithms
                </li>
                <li>
                  <i className="fas fa-bolt me-2 text-accent"></i> Real-time
                  analytics dashboards
                </li>
                <li>
                  <i className="fas fa-bolt me-2 text-accent"></i> AI-powered
                  matchmaking
                </li>
                <li>
                  <i className="fas fa-bolt me-2 text-accent"></i> Virtual event
                  platforms
                </li>
              </ul>
            </div>
          </Col>

          {/* Coming Soon Product */}
          <Col lg={12} className="fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="coming-soon-card mt-4 p-4 p-lg-5">
              <Row className="align-items-center">
                <Col lg={8}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="pulse-icon me-3">
                      <i className="fas fa-box-open fa-2x text-white"></i>
                    </div>
                    <h3 className="text-white mb-0">
                      Exciting Product Launch Coming Soon
                    </h3>
                  </div>
                  <p className="text-white">
                    We’re building something extraordinary with AI at its core —
                    designed to simplify, scale, and empower. Join our waitlist
                    and be the first to know when we launch.
                  </p>
                  <div className="progress mt-4 mb-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small className="text-white">Development in progress </small>
                </Col>
                <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                  <a
                    href="mailto:hello@eventaisoft.com?subject=Join%20Waitlist"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="btn btn-accent btn-lg text-white">
                      Join Waitlist <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
