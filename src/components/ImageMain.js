import React from "react";
import { Figure, Container, Row, Col, Button } from "react-bootstrap";
import Chair from "./Images/chair.png";
import "./styles/_imagemain.scss";

const ImageMain = () => {
  return (
    <>
      <Container className="ImageMain">
        <Figure>
          <Row>
            <Col sm={8}>
              <Figure.Image
                width={300}
                height={400}
                alt="171x180"
                src={Chair}
              />
            </Col>

            <Col sm={4}>
              <br />
              <Figure.Caption>
                <p>
                  React lets you define components as classes or functions.
                  Components defined as classes currently provide more features
                  which are described in detail on this page.
                </p>
              </Figure.Caption>
              <br />
              <Figure.Caption>
                <p>
                  React lets you define components as classes or functions.
                  Components defined as classes currently provide more features
                  which are described in detail on this page.
                </p>
              </Figure.Caption>
              <Col>
                <Button variant="default" size="sm">
                  Get Started
                </Button>{" "}
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </Col>
            </Col>
          </Row>
        </Figure>
      </Container>
    </>
  );
};

export default ImageMain;
