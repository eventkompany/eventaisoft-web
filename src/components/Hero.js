import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 hero-content">
            <div className="slide-in-left">
              <h1 className="display-3 fw-bold mb-4 text-white">
                AI-Powered Event Solutions
              </h1>
              <p className="lead mb-4 text-white">
                Transforming event planning with intelligent automation and
                machine learning. We design cutting-edge software to streamline
                your event management process.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="slide-in-right d-flex justify-content-center">
              <img
                src="/hero-image.png"
                alt="AI Event Management"
                className="img-fluid curved-image"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
