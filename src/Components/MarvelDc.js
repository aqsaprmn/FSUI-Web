import { Card, Container, Row, Col, Image } from "react-bootstrap";
import batmanImage from "../Assets/images/batman.jpg";
import docterImage from "../Assets/images/docter.jpeg";
import captmarvelImage from "../Assets/images/captmarvel.jpg";
import spidermanImage from "../Assets/images/spiderman.jpg";
import supermanImage from "../Assets/images/superman.jpg";
import avengerImage from "../Assets/images/avenger.jpeg";

const MarvelDc = () => {
  return (
    <div className="py-4">
      <div className="text-white py-4">
        <h1 className="lh-1">MARVEL & DC</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image className="filmImage" src={batmanImage} alt="Batman" />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Batman</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image
                  className="filmImage"
                  src={docterImage}
                  alt="Docter Strange"
                />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Docter Strange</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image
                  className="filmImage"
                  src={captmarvelImage}
                  alt="Captain Marvel"
                />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Captain Marvel</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image
                  className="filmImage"
                  src={spidermanImage}
                  alt="Spiderman"
                />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Spiderman</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image
                  className="filmImage"
                  src={supermanImage}
                  alt="Superman"
                />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Superman</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="movieImage text-white">
                <Image className="filmImage" src={avengerImage} alt="Avenger" />
                <div className="bg-dark rounded-bottom">
                  <div className="mt-1 p-2">
                    <Card.Title>Avenger</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MarvelDc;
