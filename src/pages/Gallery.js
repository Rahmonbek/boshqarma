
import React, { Component } from 'react'
import styles from '../css/Gallery.module.css'
import { Col, Row } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import { idMaktab, url, user } from '../host/Host'
import NavbarA from './NavbarT'
import Footer from './FooterA'
import Loader from './Loader'
import til1 from "../img/til1.jpg"
import til2 from "../img/til2.jpg"
import til3 from "../img/til3.jpg"
import til4 from "../img/til4.jpg"
import til5 from "../img/til5.jpg"

export default class Gallery extends Component {
     state={
    loader:true,
   
    school:null,
  
}
  
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${user}`).then((res) => {
    
      this.setState({
        school: res.data,

       
      });
axios.get(`${url}/region/${res.data.region}/`).then(res1=>{
  this.setState({region:res1.data})
  setTimeout(() => {
    this.setState({
      loader: false,
    });
  }, 3000);
})
     
    });
  };
 

  componentDidMount() {
    
    this.getSchool();

   
    }
    render() {
       
        return (
          <div>
          {this.state.loader?(<Loader/>): <div>
                <NavbarA/>
         
<div className={styles.header1}>
<ul className={styles.slideshow}>
	<li><span >    <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div></span></li>
  <li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div></span></li>
	<li><span>  <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div></span></li>
	<li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div></span></li>
	<li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div></span></li>
</ul></div>


    

      


                











<div className={styles.rasmlar}>
    <Row style={{justifyContent:'center'}}>
    {
         this.state.school!==null && this.state.school.b_r1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src="https://telegra.ph/file/42b77ca090a647c5f5d6c.jpg"/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.b_c1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.b_c1}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.b_c2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src="https://telegra.ph/file/7367cb57f8f72240c7e8d.jpg" />
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.b_c3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src="https://telegra.ph/file/8826f1e7dfe9e79195730.jpg"/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_h1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src="https://telegra.ph/file/e873fa99463535a46e774.jpg"/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_h2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src="https://telegra.ph/file/eb7a95c1cbb8fd2eda1bb.jpg"/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.m_h_h3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h3}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.m_h_h4!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={til1}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.m_h_h5!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h5}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_navruz!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_navruz}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_mustaqillik!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_mustaqillik}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_bitiruv!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_bitiruv}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_t!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_t}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.m_h_oshxona!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={til2}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_musiqa!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={til3}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_sport!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={til4}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={til5}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto1}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto2}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.foto3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto3}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto4!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto4}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.foto5!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto5}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto6!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto6}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.foto7!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto7}/>
     </Col>:""
     } */}
        
    </Row>
</div>
<Footer/>
            </div>
    }</div>)
    }
}

