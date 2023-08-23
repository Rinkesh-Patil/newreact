
import React, { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
// import {Footer1} from './components/Footer1';
// import Header from './Header';
// import Footer from './Footer';
import Carosel from './Carosel';
import { Button, Card } from 'react-bootstrap';
function Home() {
  const [sector,setSector] = useState([]);
   
   const getTours =  ()=> {
    const response =  fetch("http://localhost:8080/tour/sectors")
    .then(response => response.json())
    .then(res => setSector(res));

    console.log(sector);
    const data = JSON.stringify(sector);
    console.log(data);
   }

  useEffect(() => {
    getTours();
  },[]);
    return (
      <div>
          

          <Carosel/>
          <br />
         
         {
          sector.map((sec) => (
            <Card style={{ width: '18rem' }} className='fcontainer'>
            <Card.Img variant="top" src={sec.sectorImgPath} />
            <Card.Body>
              <Card.Title>{sec.sectorName} </Card.Title>  
              <Card.Text>
                {sec.sectorinfo}
              </Card.Text>  
            </Card.Body>
          </Card>
          )
            )
         }
        
        
      </div>
    );
  }
  
  export default Home;