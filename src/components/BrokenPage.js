import { Container, Row, Col } from 'react-bootstrap';

const BrokenPage = () => {
  return (
    <section id="broken" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="construction-animation">
              <div className="construction-icon">
                <div className="cone"></div>
                <div className="barrier-left"></div>
                <div className="barrier-right"></div>
              </div>
            </div>
            <h2 className="text-white mb-4 fade-in">
              🚧 Oh no! Our Site is Still Under Development 🚧
            </h2>
            <p className="lead text-white mb-4 fade-in" style={{ animationDelay: '0.3s' }}>
              We're working hard to build something amazing! Our team
              of digital engineers is crafting the perfect experience.
            </p>
            <div className="code-snippet fade-in" style={{ animationDelay: '0.6s' }}>
              <pre className="text-start">
                <code>
                  {`
// What's happening behind the scenes:
while (!siteComplete) {
  drinkCoffee();
  writeCode();
  debug();
  repeat();
}`}
                </code>
              </pre>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrokenPage;
