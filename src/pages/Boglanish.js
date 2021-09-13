import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from '../css/Dashboard.module.css'
import gerb from '../img/gerb.png'
import bog from '../css/Boglanish.module.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

import CallIcon from '@material-ui/icons/Call';
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import Footer from './Footer'
export default class Boglanish extends Component {
  render() {
    return (
      <div>
        <Navbar style={{position:"relative",background:'#1105e6',position:'fixed',top:'0px',width:'100%',zIndex:'33'}}expand="lg">
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
        <Nav.Link style={{textAlign:"center", width:'190px'}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
    Bosh sahifa
            </NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Rahbariyat</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Yangiliklar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Tumanlar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/boglanish">Bog'lanish</NavLink></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<YMaps>
          <Map
            className={bog.map}
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }}
          >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map>
        </YMaps>

        <div className={bog.card1} tabindex="0">
  <span className={bog.card__infoicon}>
<CallIcon  style={{color:'red'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>

<div className={bog.card2} tabindex="0">
  <span className={bog.card__infoicon}>
<TelegramIcon  style={{color:'white'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>



<div className={bog.card3} tabindex="0">
  <span className={bog.card__infoicon}>
  <FacebookIcon/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>


<div className={bog.card4} tabindex="0">
  <span className={bog.card__infoicon}>
<YouTubeIcon style={{color:'red',opacity:'0.7'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>
<div className={bog.card5} tabindex="0">
  <span className={bog.card__infoicon}>
<InstagramIcon style={{color:'rgb(195, 11, 103)'}} />
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>


<div className={bog.card6} tabindex="0">
  <span className={bog.card__infoicon}>
<MailIcon />
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>
<Footer/>
</div>
    )
  }
}
