import React, { Component } from "react";
import FooterA from "./FooterA";
import NavbarT from "./NavbarT";
import style from "../css/Tumanlar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import Loader from "./Loader";
import sanakulov from "../img/sanakulov.jpg";
import sharahmetov from "../img/sharahmetov.jpg";
import djulibekov from "../img/djulibekov.jpg";
import tuman1 from "../img/tuman1.jpg";
import tuman2 from "../img/tuman2.jpg";
import tuman3 from "../img/tuman3.jpg";
import tuman4 from "../img/tuman4.jpg";

export default class Tumanlar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2);
  }
  render() {
    return (
      <div>
        {this.state.timePassed == false ? (
          <Loader />
        ) : (
          <div>
            <NavbarT />
            <div className={style.head}>
              <div className={style.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati xalq ta'limi
                boshqarmasining tumanlaridagi bo'limlari
              </div>
            </div>
            <div className={style.tumanlar}>
              <div className={style.tumanlar_item}>
                <h1 className="title">Xonqa tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={sanakulov}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className="title">Gurlan tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={sharahmetov}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className="title">Xazorasp tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={tuman1}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className="title">Urganch tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={tuman2}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className="title">Yangibozor tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={tuman3}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                        Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className="title">Yangiariq tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={tuman4}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              
              <div className={style.tumanlar_item}>
                <h1 className="title">Bog'ot tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={tuman1}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className="title">Qo'shko'pir tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className="title">Shovot tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={djulibekov}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
            
                 


                      {/* <YouTube
                      
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      /> */}


                      
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className="title">Xiva tumani</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={sanakulov}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className="title">Urganch shahri</h1>

                <div className="chiziq"></div>
                <br />
                <br />
                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src={sharahmetov}
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ismoilov Rahmon Zohid o'g'li</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
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
                        <div id={style.mediaa11}>
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
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p   className={style.pp}>
                      Xorazm viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                       Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />


             







            </div>
            <FooterA />
          </div>
        )}
      </div>
    );
  }
}
