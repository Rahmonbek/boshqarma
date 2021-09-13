import React, { Component } from 'react'
import Footer from './Footer'
import NavbarT from './NavbarT'
import style from '../css/Tumanlar.module.css'
import { Col, Container, Row,} from 'react-bootstrap'
import { Tooltip } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube'
export default class Tumanlar extends Component {
    render() {
        return (
            <div>
          <NavbarT/>
          <div className={style.head}>
<div className={style.head_text}>
    O'zbekiston Respublikasi Jizzax viloyati xalq ta'limi boshqarmasining tumanlaridagi bo'limlari
</div>
          </div>
      <div className={style.tumanlar}>
      <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div>
   <br/>
   <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div><br/>
   <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div><br/>
   <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div><br/>
   <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div><br/>
   <div className={style.tumanlar_item}>
<h1 className="title">Baxmal tumani</h1>

        <div className="chiziq"></div>
        <br/>
        <br/>
    <Row>
     
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim direktori</h4>
            <div className={style.chiziq}></div>
     <br/>       
                <img src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <br/>
<p>Ismoilov Rahmon Zohid o'g'li</p>

<p>Bo'limning ijtimoiy sahifalari:</p>
<div className={style.iconsHead}>
               
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
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        className={style.ahref}
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                      <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
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
                      
                        href={`tel: +998 93 082 03 72}`}
                      >
       <i className="fas fa-phone"></i>
                                     </a>{" "}
                    </Tooltip>
                  </div>
                </div>

            </Container>
        </Col>
        <Col lg={6} md={6} sm={12} style={{position:'relative'}}>
            <Container style={{position:'relative', paddingBottom:'40px'}}>
            <h4>Bo'lim haqida</h4>
            <div className={style.chiziq}></div>
            <br/>
            <YouTube
                videoId="vRypTFwbdqI"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                className={style.video}
              />
              <p className={style.pp}>
              
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
             
              </p>
              <a href="#" className={style.but} target="_blank">Bo'limning veb saytiga o'tish</a>
</Container>
</Col>
    </Row>
   </div>
      </div>
         <Footer/>
            </div>
        )
    }
}