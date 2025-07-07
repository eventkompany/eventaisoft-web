import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="fade-in">
              <h3 className="h4 mb-3 text-white">Eventai Soft Solutions LLP</h3>
              <p className="text-white">
                7/66 Chengaloor PO <br />
                Thrissur, Kerala 680312
              </p>
              <a
                href="https://linkedin.com/company/eventaisoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-linkedin" style={{ fontSize: "2rem" }}></i>
              </a>
              <a
                href="https://instagram.com/eventaisoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0"></Col>
          <Col md={4}>
            <div className="fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="h4 mb-3 text-white">Contact Us</h3>
              <address className="text-white">
                <p>
                  <a href="mailto:hello@eventaisoft.com">
                    hello@eventaisoft.com
                  </a>
                </p>
              </address>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
