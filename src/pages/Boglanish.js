import React, { Component } from 'react'
import bog from '../css/Boglanish.module.css'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import Footer from './FooterA'
import NavbarT from './NavbarT'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
export default class Boglanish extends Component {
  render() {
    return (
      <div>
    <NavbarT/>
<a href="tel:+99896487223" className={bog.phone}  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><PhoneForwardedIcon style={{fontSize:'35px',color:'green'}}/></a>href="tel:+99896487223" 
<a href="https://t.me/websirius11" className={bog.telegramm} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"><TelegramIcon style={{fontSize:'40px',color:'blue'}} /></a>
<h1 style={{margin:'auto',textAlign:'center',marginTop:'200px'}}>Qabulxonalarimiz</h1>

<Container>
  <Row>
<Col><Card style={{ width: '18rem',margin:'auto',textAlign:'center',marginTop:'30px' }}>
 <YMaps>
   <div>
          <Map width='100%'
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }} >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map></div>
        </YMaps>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{ width: '18rem',margin:'auto',textAlign:'center',marginTop:'30px' }}>
 <YMaps>
   <div>
          <Map width='100%'
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }} >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map></div>
        </YMaps>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{ width: '18rem',margin:'auto',textAlign:'center',marginTop:'30px' }}>
 <YMaps>
   <div>
          <Map width='100%'
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }} >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map></div>
        </YMaps>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>



  </Row>
</Container>
    
<Footer/>
</div>
    )
  }
}
