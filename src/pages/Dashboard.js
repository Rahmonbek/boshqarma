import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gerb from '../img/gerb.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  faDoorOpen,
  faEnvelope,
  faNewspaper,
  faPhone,
  faSchool,
  faSearch,
  faSignInAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import school from "../img/gerb.jpg";
import teg from '../img/teg.jpg'
import advice from '../img/advice.jpg'
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";

import yil from '../img/yil.jpg'
import 'antd/dist/antd.css';
import rahbar from '../img/rahbar.jpg'
import style from '../css/Dashboard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-carousel/lib/styles.css";

import { Nav, Navbar, Container, Row, Col,Card } from 'react-bootstrap';
import { Tooltip} from 'antd'
import { NavLink, Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import Footer from './Footer';

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
        const responsive1 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 2
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
          const responsive2 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 7,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 6,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2,
            },
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
        <Nav.Link style={{textAlign:"center", width:'190px'}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
    Bosh sahifa
            </NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Rahbariyat</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Yangiliklar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Tumanlar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Bog'lanish</NavLink></Nav.Link>
        
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
      <Nav.Link style={{textAlign:"center", width:'190px'}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
    Bosh sahifa
            </NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Rahbariyat</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Yangiliklar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Tumanlar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">Bog'lanish</NavLink></Nav.Link>
        
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
            <div className="chiziq"></div>
           <br/><p className={style.fio}>Ismoilov Rahmon Zohidovich</p>
            <p className={style.qabul}>Seshanba, Juma - soat 10:00 dan 12:00 gacha</p>
          <div className={style.icon}>
            <img src="https://play-lh.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ=s180-rw"/>
            <a href="https://archive.uz/source/images/qr_hududiy_arxiv_ishi.pdf">Boshqarma nizomi</a>
             </div>
            <div className={style.iconsHead}>
              <div>
                <Tooltip placement="bottom" title="ittower01@gmail.com">
                  {" "}
                  <a
                    target="_blank"
                    style={{ borderRight: " 1px solid blue"}}
                    className={style.ahref}
                    href={`mailto: ittower01@gmail.com
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ fontSize: "25px" }}
                    />
                  </a>
                </Tooltip>
              </div>
              <div>
                <a
                  target="_blank"
                  
                  className={style.ahref}
                  href="https://t.me/samarqand_33_maktab"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  
                  className={style.ahref}
                  href="https://www.instagram.com/33_maktab_official/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  
                  className={style.ahref}
                  href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  
                  className={style.ahref}
                  href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div>
                <Tooltip placement="bottom" title="+998 93 082 03 72">
                  {" "}
                  <a
                    target="_blank"
                    className={style.ahref}
                    style={{
                      borderRight: " 1px solid blue",
                     
                    }}
                    href={`tel: +998 93 082 03 72}`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{
                        fontSize: "25px",
                        
                      }}
                    />
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
        </Col>
        <Col lg="6" md="6" sm="12" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <div className={style.colimg}>
            <img src={rahbar}/>
            </div>
        </Col>
    </Row>
</div>
<div className={style.stas}>

<div className={style.stas_item}>
<p><i className="fab fa-youtube"></i></p>
<p className={style.tit}>Tuman bo'limlar</p>
<p className={style.num}>15 ta</p>
</div>

<div className={style.stas_item}>
<p><i className="fab fa-youtube"></i></p>
<p className={style.tit}>Maktablar</p>
<p className={style.num}>350 ta</p>
</div>
<div className={style.stas_item}>
<p><i className="fab fa-youtube"></i></p>
<p className={style.tit}>B.A.M. lar</p>
<p className={style.num}>25 ta</p>
</div>
<div className={style.stas_item}>
<p><i className="fab fa-youtube"></i></p>
<p className={style.tit}>O'quvchilar</p>
<p className={style.num}>16545 ta</p>
</div>
<div className={style.stas_item}>
<p><i className="fab fa-youtube"></i></p>
<p className={style.tit}>O'quvchilar</p>
<p className={style.num}>7832 ta</p>
</div>
<div className={style.stas_black}></div>
</div>
<div className={style.news}>
  <Row>
  <Col lg={8} md={12} sm={12}>
  <br/><br/>
  <Container>

  <h1 className="title">Yangiliklar</h1>
  <div className="chiziq1"></div></Container><br/>
<Carousel
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={3000}
            responsive={responsive1}>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
</div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
  <div className={style.news_item}>
    <Card style={{ border:'1px solid lightgrey'}}>
  <Card.Img variant="top" src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg" />
  <Card.Body>
    <p className={style.vaqt}> <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>12.03.2021</p> 
    <Card.Text style={{fontSize:'16px'}}>Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka nomzod sifatida tasdiqlandi</Card.Text>
    </Card.Body>
</Card>
    </div>
</Carousel>
<Link to="/" className={style.bar}>Barcha yangiliklar <i className="fas fa-arrow-right"></i></Link>
      </Col>
      <Col lg={4} md={12} sm={12} style={{display:'flex', alignItems:'center'}}>
      <img style={{width:"100%"}} src="https://scontent.ftas6-1.fna.fbcdn.net/v/t1.6435-9/133830108_2002413663242809_1340753596329812727_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gpk8gZgwJXkAX8b3NCo&_nc_ht=scontent.ftas6-1.fna&oh=a2027655adc6c7744e07a79152ca69fd&oe=6165BEE1"/>
      </Col>
      </Row>
</div>
<div className={style.elem}>
  
  <Row style={{alignItems:'center'}}>
  
  <Col lg={2} md={12} sm={12}>
  <h2  className={style.colT}>
    Bizning ijtimoiy sahifalarimiz:
  </h2>
  </Col>
  
  <Col lg={2} md={6} sm={12}>
  <a src="#"  className={style.colT} target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png"/> 
  <p>Telegram sahifasi</p></a>
    </Col>
  <Col lg={2} md={6} sm={12}>
  <a src="#"  className={style.colT} target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"/> 
  <p>Instagram sahifasi</p></a>
    </Col>
  <Col lg={2} md={6} sm={12}>
  <a src="#"  className={style.colT} target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"/> 
  <p>Facebook sahifasi</p></a>
    </Col>
  <Col lg={2} md={6} sm={12}>
  <a src="#"  className={style.colT} target="_blank">
  <img src="https://toppng.com/uploads/preview/logo-twitter-11549535419aik8i3pkro.png"/> 
  <p>Twitter sahifasi</p></a>
    </Col>
  <Col lg={2} md={6} sm={12}>
  <a src="#"  className={style.colT} target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"/> 
  <p>You tube sahifasi</p></a>
    </Col>
  
  </Row>
   
</div>
<div className={style.gal}>
<Row>
  <Col lg={4} md={12} sm={12}>
  <h1 className="title">Video lavhalar</h1>
  <div className="chiziq1"></div><br/>
  <YouTube
                    videoId="vRypTFwbdqI"
                    opts={{
                      width:'100%',
                      height: "300px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={style.video}
                  />
                  <p className={style.pp}><i>
                    Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.</i>
                  </p>
                  <Link to="/" className="bar">Barcha vidoelarni ko'rish <i className="fas fa-arrow-right"></i></Link>

  </Col>
  <Col lg={8} md={12} sm={12}>
  <h1 className="title">Foto lavhalar</h1>
  <div className="chiziq1"></div><br/>
    <Row>
    <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>
      <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>
      <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>
      <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>
      <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>
      <Col lg={4} md={4} sm={6} style={{paddingBottom:'20px'}}>
        <img src="https://uznews.uz/upload/cache/a8/a9/a8a9e3dbf3c58fa209c6677bee350344.webp"/>
      </Col>

    </Row>
    <Link to="/" className="bar">Barcha rasmlarni ko'rish <i className="fas fa-arrow-right"></i></Link>

  </Col>
</Row>
</div>
<div className={style.sliderHomiy}>
            <Carousel
              responsive={responsive2}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              infinite={true}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://president.uz/oz" target="_blank">
                    <img src={school} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://www.gov.uz/uz" target="_blank">
                    <img src={her2} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasining Hukumat portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://lex.uz/" target="_blank">
                    <img src={her3} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://my.gov.uz/oz" target="_blank">
                    <img src={her4} />
                  </a>
                </div>
                <p>Interaktiv davlat xizmatlarining Yagona portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://www.uzedu.uz/" target="_blank">
                    <img src={her5} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className={style.toolpat} style={{ backgroundColor: "white" }}>
                  <a href="https://ittower.uz/" target="_blank">
                    <img src={her6} />
                  </a>
                </div>
                <p>IT Tower firmasi </p>
              </div>
            </Carousel>
          </div>
          <div style={{ width: "100%" }}>
          <Row
            style={{
              backgroundColor: "white",
              paddingTop: "40px",
              maxWidth: "100% !important",
            }}
          >
            <Col lg={6} md={12} sm={12} className="fgr">
            <h1 className="title">Bizning manzilimiz</h1>
  <div className="chiziq1"></div><br/>
  
              <div className="mapsr">
                <br />
                <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
                  <Map
                    width="100%"
                    height="400px"
                    // style={{marginLeft:"10%"}}
                    state={{
                      center: [39.651698, 66.97187],
                      zoom: 13,
                    }}
                  >
                    <Clusterer
                      options={{
                        groupByCoordinates: false,
                      }}
                    >
                      <Placemark
                        key={-1}
                        geometry={[39.651698, 66.97187]}
                        options={{
                          iconLayout: "default#image",
                        }}
                        properties={{
                          hintContent: `<h6><b className="personStyle">33 - maktab</b></h6>`,
                        }}
                        modules={["geoObject.addon.hint"]}
                      />
                    </Clusterer>

                    <GeolocationControl options={{ float: "left" }} />

                    <RouteButton options={{ float: "right" }} />
                    <ZoomControl options={{ float: "left" }} />
                  </Map>
                </YMaps>
                <br />
               <Row style={{paddingLeft:'20px', marginTop:'20px'}}>
               <Col lg={6}>
                   <a target="_blank" href="https://t.me/huquqiyaxborot">
                     <img src={teg}/>
                   </a>
                 </Col>
                 <Col lg={6}>
                   <a target="_blank" href="https://advice.uz/uz">
                     <img src={advice}/>
                   </a>
                 </Col>
               </Row>
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="fgr">
            <h1 className="title">Murojaat qilish</h1>
  <div className="chiziq1"></div><br/>
  
              <div className="formFER">
                <div className="container">
                  <div className="brand-logo"></div>
                  {/* <div className="brand-title">TWITTER</div> */}
                  <div className="inputs">
                    <form>
                      <label>F.I.O.</label>
                      <input type="text" placeholder="Ism Familiya Otchistva" />
                      <label>Telefon raqam</label>
                      <input type="text" placeholder="+998 99 999 99 99" />
                      <label>Murojaat</label>
                      <textarea placeholder="Murojaat matni..."></textarea>
                      <button type="submit">Yuborish</button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
<Footer/>
</div>
        )
    }
}
