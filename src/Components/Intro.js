import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro px-4">
      <Container className="text-white d-flex justify-content-center align-content-center ">
        <Row>
          <Col>
            <div className="title">NONTON FILM GRATIS</div>
            <div className="title">TANPA BELI KARCIS</div>
            <div className="introButton text-center mt-4">
              <Button href="#trending">Ayo Nonton</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
