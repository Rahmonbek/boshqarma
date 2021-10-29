import video2 from '../video/bosh3.mp4'
import React, { Component } from 'react'
import style from '../css/Lavhalar.module.css'
import { Col, Row } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import NavbarT from './NavbarT'
import Footer from './Footer'
import Loader from './Loader';
import drasm1 from '../img/drasm1.jpeg'
import drasm2 from '../img/drasm2.png'
import drasm3 from '../img/drasm3.jpeg'
import drasm4 from '../img/drasm4.jpeg'
import drasm5 from '../img/drasm5.png'
import drasm6 from '../img/drasm6.jpg'
import drasm7 from '../img/drasm7.jpg'
import drasm8 from '../img/drasm8.png'
import drasm9 from '../img/drasm9.jpg'
import dxorazm1 from '../img/dxorazm1.jpg'
import dxorazm3 from '../img/dxorazm3.jpg'
import dxorazm4 from '../img/dxorazm4.jpg'
import dxorazm5 from '../img/dxorazm5.jpg'
import dxorazm6 from '../img/dxorazm6.jpg'
import dxorazm7 from '../img/dxorazm7.jpg'

export default class Gallery extends Component {
     state={
    loader:true,
   
    school:null,
  
}
  
  componentDidMount() {
    
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 4000);
  
  
   
    }
    render() {
       
        return (
          <>
            {this.state.timePassed == false ? (
          <Loader />): <div>
                <NavbarT/>
                <div className={style.video}>
                <video loop={true} autoPlay={true} muted={true}>
      <source src={video2} type="video/mp4" />
  </video>
  </div>
  <div className={style.binaf}>
      <h1>
      O`zbekiston Respublikasi Xorazm viloyati Bog`ot tumani xalq ta`lim
                          boshqarmasi fotolavhalari
        </h1>
      </div>

<div className={style.rasmlar}>
    <Row style={{justifyContent:'center'}}>
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm1}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm2}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm3}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm4}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm5}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm6}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm7}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm8}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={drasm9}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm1}/>
     </Col>
     }
   
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm3}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm4}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm5}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm6}/>
     </Col>
     }
    {
        <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={dxorazm7}/>
     </Col>
     }
        
    </Row>
</div>
<Footer/>
            </div>
    }</>)
    }
}

