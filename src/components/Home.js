import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from './Carosel';
import { Card, Row, Col } from 'react-bootstrap';

function Home() {
  const [sector, setSector] = useState([]);

  const getTours = () => {
    fetch("http://localhost:8080/tour/sectors")
      .then(response => response.json())
      .then(res => setSector(res));
  }

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div>
      <Carosel />
      <br />

      <Row className="justify-content-center">
        {sector.map(sec => (
          <Col key={sec.id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }} className='fcontainer'>
              <Card.Img variant="top" src={sec.sectorImgPath} />
              <Card.Body>
                <Card.Title>{sec.sectorName}</Card.Title>
                <Card.Text>
                  {sec.sectorinfo}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
