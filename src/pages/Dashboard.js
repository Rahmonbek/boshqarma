import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gerb from "../img/gerb.png";
import "bootstrap/dist/css/bootstrap.min.css";
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
import teg from "../img/teg.jpg";
import advice from "../img/advice.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import yil from "../img/yil.jpg";
import "antd/dist/antd.css";
import rahbar from "../img/rahbar.jpg";
import style from "../css/Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-carousel/lib/styles.css";
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";
import { Tooltip } from "antd";
import { NavLink, Link } from "react-router-dom";
import YouTube from "react-youtube";
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
import Footer from "./Footer";
import Tumanlar from "./Tumanlar";
import NavbarT from "./NavbarT";

export default class Dashboard extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    const responsive1 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
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
    const responsive3 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          {/* <div className={style.car_item}><img src="https://www.uzedu.uz/uploads/2020/03/photo2020-03-1221-39-35-760x500.jpg" className={style.image}/></div> */}
          <div className={style.car_item}>
            <img
              src="https://www.gazeta.uz/media/img/2019/09/TzSlyW15681190612830_l.jpg"
              className={style.image}
            />
          </div>
          <div className={style.car_item}>
            <img
              src="https://static.review.uz/crop/1/0/1400__100_1004528215.jpg"
              className={style.image}
            />
          </div>
          <div className={style.car_item}>
            <img
              src="https://storage.kun.uz/source/4/ILAspvrLpXnT0IHX_5BbxdhZePCWP4X3.jpg"
              className={style.image}
            />
          </div>
        </Carousel>
        <div className={style.navT}>
          <NavbarT />
        </div>

        <div className={style.text}>
          <h1>Yoshlarimizning bilim olishi biz uchun katta ahamiyatga ega</h1>
        </div>
        <br />
        <div className={style.rahbar}>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="chiziq">
                <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Boshqarma rahbari
                </h2>
              </div>
              <br />
              <p className={style.fio}>Ismoilov Rahmon Zohidovich</p>
              <p className={style.qabul}>
                Seshanba, Juma - soat 10:00 dan 12:00 gacha
              </p>
              <div className={style.icon}>
                <img src="https://play-lh.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ=s180-rw" />
                <a href="https://archive.uz/source/images/qr_hududiy_arxiv_ishi.pdf">
                  Boshqarma nizomi
                </a>
              </div>
              <div className={style.iconsHead}>
                <div>
                  <Tooltip placement="bottom" title="ittower01@gmail.com">
                    {" "}
                    <a
                      target="_blank"
                      style={{ borderRight: " 1px solid blue" }}
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
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </Col>
            <Col
              lg="6"
              md="6"
              sm="12"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={style.colimg}>
                <img src={rahbar} />
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.stas}>
          <div className={style.stas_item}>
            <p>
              <i className="fas fa-map-marked-alt"></i>
            </p>
            <p className={style.tit}>Tuman bo'limlar</p>
            <p className={style.num}>15 ta</p>
          </div>

          <div className={style.stas_item}>
            <p>
              <i className="fas fa-school"></i>
            </p>
            <p className={style.tit}>Maktablar</p>
            <p className={style.num}>350 ta</p>
          </div>
          <div className={style.stas_item}>
            <p>
              <i className="fas fa-university"></i>
            </p>
            <p className={style.tit}>B.A.M. lar</p>
            <p className={style.num}>25 ta</p>
          </div>
          <div className={style.stas_item}>
            <p>
              <i className="fas fa-book-reader"></i>
            </p>
            <p className={style.tit}>O'quvchilar</p>
            <p className={style.num}>16545 ta</p>
          </div>
          <div className={style.stas_item}>
            <p>
              <i className="fas fa-chalkboard-teacher"></i>
            </p>
            <p className={style.tit}>O'quvchilar</p>
            <p className={style.num}>7832 ta</p>
          </div>
          <div className={style.stas_black}></div>
        </div>
        <div className={style.news}>
          <Row>
            <Col lg={8} md={12} sm={12}>
              <br />
              <br />
              <Container>
                <h1 className="title">Yangiliklar</h1>
                <div className="chiziq1"></div>
              </Container>
              <br />
              <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive1}
              >
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Shavkat Mirziyoyev O‘zLiDeP partiyasidan prezidentlikka
                        nomzod sifatida tasdiqlandi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/YKARQQicDmPFAXIZ5k0pbMWHclKl1UeR.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        1-kursga qabul qilingan talabalar uchun tanishtiruv
                        haftaligi 6 sentyabrdan boshlanadi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/KkLEve_DkJvTBnx9-vqciHeTaSry84H1.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Mahalliy OTMlardan o‘qishni ko‘chirish natijalari 6
                        sentyabrda e'lon qilinadi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/nniHcJCjqbs4LP7EUhb_HHkkl2xCKaPL.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Ta'lim inspeksiyasi abituriyentlardan hujjat qabul
                        qilayotgan nodavlat OTMlar haqida ma'lumot berdi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/CT4sAcUUqCD_61lPh_66m7E91vkCg2QC.jpeg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Mercedes-Benz kompaniyasi S-Class sedanining zirhlangan
                        versiyasini ishlab chiqdi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/9pkzRhIUz-vvKVxNH7ZcdBKJJzKYjlfE.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        SpaceX sentyabrda butun sayyorani sun'iy yo‘ldosh
                        interneti bilan ta'minlamoqchi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/Dd9U4g7AvpMNugeKTc3Ogn5lJ2IwRGNz.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Mustaqillik bayrami arafasida O‘zbekiston bayrog‘i
                        stratosferaga uchirildi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/px0xcRw5sWx70dr1lFDGxqULu9kjKQp8.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Xitoy fazoda quyosh energiyasini yig‘ib, uni Yerga
                        jo‘natish ustida ish olib bormoqda
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card
                    style={{ border: "1px solid lightgrey", height: "400px" }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src="https://storage.kun.uz/source/7/ZM--s9ItIwkhxzA7kau5Kx0nhEbsRu2m.jpg"
                    />
                    <Card.Body>
                      <p className={style.vaqt}>
                        {" "}
                        <i
                          style={{ marginRight: "10px" }}
                          className="far fa-calendar-alt"
                        ></i>
                        12.03.2021
                      </p>
                      <Card.Text style={{ fontSize: "16px" }}>
                        Toyota kompaniyasi Corolla modelining 50 millioninchi
                        nusxasini sotdi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel>
              <Link to="/" className={style.bar}>
                Barcha yangiliklar <i className="fas fa-arrow-right"></i>
              </Link>
            </Col>

            <Col
              lg={4}
              md={12}
              sm={12}
              className={style.gtr}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://scontent.ftas6-1.fna.fbcdn.net/v/t1.6435-9/133830108_2002413663242809_1340753596329812727_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gpk8gZgwJXkAX8b3NCo&_nc_ht=scontent.ftas6-1.fna&oh=a2027655adc6c7744e07a79152ca69fd&oe=6165BEE1"
              />
            </Col>
          </Row>
        </div>
        <div className={style.elem}>
          <Row style={{ alignItems: "center" }}>
            <Col className={style.htr} lg={2} md={12} sm={12}>
              <h2 className={style.colT}>Bizning ijtimoiy sahifalarimiz:</h2>
            </Col>

            <Col className={style.htr} lg={2} md={6} sm={12}>
              <a src="#" className={style.colT} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png" />
                <p>Telegram sahifasi</p>
              </a>
            </Col>
            <Col className={style.htr} lg={2} md={6} sm={12}>
              <a src="#" className={style.colT} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                <p>Instagram sahifasi</p>
              </a>
            </Col>
            <Col className={style.htr} lg={2} md={6} sm={12}>
              <a src="#" className={style.colT} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
                <p>Facebook sahifasi</p>
              </a>
            </Col>
            <Col className={style.htr} lg={2} md={6} sm={12}>
              <a src="#" className={style.colT} target="_blank">
                <img src="https://toppng.com/uploads/preview/logo-twitter-11549535419aik8i3pkro.png" />
                <p>Twitter sahifasi</p>
              </a>
            </Col>
            <Col className={style.htr} lg={2} md={6} sm={12}>
              <a src="#" className={style.colT} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" />
                <p>You tube sahifasi</p>
              </a>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div className={style.tumanlar}>
          <h1 className="title">Tuman bo'limlari</h1>
          <div className="chiziq1"></div>
          <br />
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive3}
          >
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="bottom" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="right" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="top" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={style.news_item}>
              <Card style={{ border: "1px solid lightgrey" }}>
                <Card.Img
                  variant="top"
                  src="https://president.uz/uploads/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg"
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                    Baxmal tumani xaql ta'limi boshqarmasi
                  </Card.Text>
                  <a className={style.hov_btn} href="#">
                    Bo'lim veb saytini ko'rish
                  </a>
                </Card.Body>
              </Card>
              <div className={style.hov}>
                <div className={style.hov_item}>
                  <div>
                    <Tooltip placement="bottom" title="ittower01@gmail.com">
                      {" "}
                      <a
                        target="_blank"
                        href={`mailto: ittower01@gmail.com
                    }`}
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div>
                    <a target="_blank" href="https://t.me/samarqand_33_maktab">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/33_maktab_official/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>

                <div className={style.tel}>
                  <Tooltip placement="bottom" title="+998 93 082 03 72">
                    {" "}
                    <a target="_blank" href={`tel: +998 93 082 03 72}`}>
                      <i className="fas fa-phone"></i>
                    </a>{" "}
                  </Tooltip>
                </div>
              </div>
            </div>
          </Carousel>
          <br />
          <Link to="/" className={style.bar} id="btr">
            Barcha tuman bo'limlarini ko'rish{" "}
            <i className="fas fa-arrow-right"></i>
          </Link>
          <br />
        </div>
        <div className="blue"></div>
        <div className={style.gal}>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <h1 className="title">Video lavhalar</h1>
              <div className="chiziq1"></div>
              <br />
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
                <i>
                  Jizzax viloyati xalq ta'limi boshqarmasiga virtual sayohat
                  qiling va boshqarma haqida ko'proq ma'lumotga ega bo'ling.
                </i>
              </p>
              <Link to="/videos" className="bar">
                Barcha vidoelarni ko'rish <i className="fas fa-arrow-right"></i>
              </Link>
            </Col>
            <Col lg={8} md={12} sm={12} className={style.jtr}>
              <h1 className="title">Foto lavhalar</h1>
              <div className="chiziq1"></div>
              <br />
              <Row>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://uzreport.news/fotobank/image/218299750e25b463ff5a6796c9fa3794.jpeg" />
                </Col>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Registan_Samarkand_Timurid_Renaissance.jpg" />
                </Col>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://www.univ-silkroad.uz/media/k2/items/cache/8f704c6e91e045c72378c71d940a59ce_XL.jpg" />
                </Col>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://fs.tonkosti.ru/em/vx/emvxsz12yg0ks0osw0kw8s4wk.jpg" />
                </Col>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Tashkent-City_name_statue.jpg" />
                </Col>
                <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                  <img src="https://xabar.uz/static/crop/7/4/920__95_745261863.jpg" />
                </Col>
              </Row>
              <Link to="/lavhalar" className="bar">
                Barcha rasmlarni ko'rish <i className="fas fa-arrow-right"></i>
              </Link>
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div
                className={style.toolpat}
                style={{ backgroundColor: "white" }}
              >
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
              <div className="chiziq1"></div>
              <br />

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
                <Row
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Col lg={6} md={6} sm={6}>
                    <a target="_blank" href="https://t.me/huquqiyaxborot">
                      <img className={style.str} src={teg} />
                    </a>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <a target="_blank" href="https://advice.uz/uz">
                      <img className={style.str} src={advice} />
                    </a>
                  </Col>
                </Row>
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="fgr">
              <h1 className="title">Murojaat qilish</h1>
              <div className="chiziq1"></div>
              <br />

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
        <Footer />
      </div>
    );
  }
}
