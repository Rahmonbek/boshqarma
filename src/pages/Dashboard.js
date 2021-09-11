import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gerb from '../img/gerb.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../css/Dashboard.module.css'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default class Dashboard extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return (
            <div>
            <Carousel
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={3000}
            responsive={responsive}>
  <div className={style.car_item}><img src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" className={style.image}/></div>
  <div className={style.car_item}><img src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" className={style.image}/></div>
  <div className={style.car_item}><img src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" className={style.image}/></div>
  <div className={style.car_item}><img src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" className={style.image}/></div>
</Carousel>
<div className={style.navT}>
<Navbar style={{position:"relative"}}expand="lg">
  <Container>
  <Navbar.Brand><NavLink className={style.navB} style={{color:'white', textDecoration:'none'}} to="/"> <div class={style.brand_img}>
                <img src={gerb}/>
            </div>
            
            <div class={style.brand_text}>
               <p>O'zbekiston Respublikasi Jizzax viloyati  <br/>  xalq ta'limi boshqarmasi </p>
               </div>
            </NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{padding:"0px 30px"}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
       Home
            </NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
<div className={style.navG} 
data-aos="fade-bottom"
     data-aos-anchor-placement="top-top"
     >
<Navbar style={{position:"relative"}}expand="lg">
 
<Navbar.Brand><NavLink className={style.navB} style={{color:'white', textDecoration:'none'}} to="/"> <div class={style.brand_img}>
                <img src={gerb}/>
            </div>
            
            <div class={style.brand_text}>
               <p>O'zbekiston Respublikasi Jizzax viloyati  <br/>  xalq ta'limi boshqarmasi </p>
               </div>
            </NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{padding:"0px 30px"}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
       Home
            </NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        <Nav.Link style={{padding:"0px 30px"}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Link</NavLink></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>

</Navbar>
</div>
<div className={style.text}>
    <h1>Yoshlarimizning bilim olishi biz uchun katta ahamiyatga ega</h1>
</div>
<br/>
<div className={style.rahbar}>
    <Row>
        <Col lg="6" md="6" sm="12">
            <h2>Boshqarma rahbari</h2>
            <p className={style.fio}>Ismoilov Rahmon Zohidovich</p>
            <p>ismoilov Rahmon Zohidovich</p>

        </Col>
        <Col lg="6" md="6" sm="12" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <div className={style.colimg}>
            <img src="https://www.gentlemansgazette.com/wp-content/uploads/2015/09/Harvey-Specter-is-a-lawyer-on-USA-Networks-Suits.webp"/>
            </div>
        </Col>
    </Row>
</div>
</div>
        )
    }
}
