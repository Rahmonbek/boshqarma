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
import pic1 from "../img/TzSlyW15681190612830_l.jpg";
import pic2 from "../img/carousel.jpg";
import pic3 from "../img/ILAspvrLpXnT0IHX_5BbxdhZePCWP4X3.jpg";
import pic4 from "../img/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg";
import pic5 from "../img/YKARQQicDmPFAXIZ5k0pbMWHclKl1UeR.jpg";
import pic6 from "../img/KkLEve_DkJvTBnx9-vqciHeTaSry84H1.jpg";
import pic7 from "../img/nniHcJCjqbs4LP7EUhb_HHkkl2xCKaPL.jpg";
import pic8 from "../img/CT4sAcUUqCD_61lPh_66m7E91vkCg2QC.jpg";
import pic9 from "../img/9pkzRhIUz-vvKVxNH7ZcdBKJJzKYjlfE.jpg";
import pic10 from "../img/Dd9U4g7AvpMNugeKTc3Ogn5lJ2IwRGNz.jpg";
import pic11 from "../img/px0xcRw5sWx70dr1lFDGxqULu9kjKQp8.jpg";
import pic12 from "../img/ZM--s9ItIwkhxzA7kau5Kx0nhEbsRu2m.jpg";
import pic13 from "../img/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg";
import pic14 from "../img/218299750e25b463ff5a6796c9fa3794.jpg";
import pic15 from "../img/Registan_Samarkand_Timurid_Renaissance.jpg";
import pic16 from "../img/8f704c6e91e045c72378c71d940a59ce_XL.jpg";
import pic17 from "../img/emvxsz12yg0ks0osw0kw8s4wk.jpg";
import pic18 from "../img/Tashkent-City_name_statue.jpg";
import pic19 from "../img/920__95_745261863.jpg";
import pic20 from "../img/twitter 2.png";
import drasm1 from "../img/drasm1.jpeg";
import drasm3 from "../img/drasm3.jpeg";
import drasm2 from "../img/drasm2.png";
import drasm8 from "../img/drasm8.png";
import drasm5 from "../img/drasm5.png";
import drasm6 from "../img/drasm6.jpg";
import drasm7 from "../img/drasm7.jpg";
import drasm9 from "../img/drasm9.jpg";
import drasm10 from "../img/drasm10.jpg";
import drasm11 from "../img/drasm11.jpg";
import dxorazm1 from "../img/dxorazm1.jpg";
import dxorazm3 from "../img/dxorazm3.jpg";
import dxorazm4 from "../img/dxorazm4.jpg";
import dxorazm5 from "../img/dxorazm5.jpg";
import dxorazm6 from "../img/dxorazm6.jpg";
import dxorazm7 from "../img/dxorazm7.jpg";
import dxorazm8 from "../img/dxorazm8.jpg";
import dxorazm9 from "../img/dxorazm9.jpg";
import priz1 from "../img/priz1.jpg";
import dir2 from "../img/dir2.jpg";

// import drasm4 from "../img/drasm4.jpeg"

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
import FooterA from "./FooterA";
import Tumanlar from "./Tumanlar";
import Loader from "./Loader";
import AOS from "aos";

export default class Dashboard extends Component {
  state = { timePassed: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 5000);

    AOS.init();
  }
  render() {
    const responsive = {
      superLargeDesktop: {
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
        items: 1,
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
        {this.state.timePassed == false ? (
          <Loader />
        ) : (
          <div>
            <Carousel
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              responsive={responsive}
            >
              {/* <div className={style.car_item}><img src="https://www.uzedu.uz/uploads/2020/03/photo2020-03-1221-39-35-760x500.jpg" className={style.image}/></div> */}
              <div className={style.car_item}>
                <img src={pic1} className={style.image} />
              </div>
              <div className={style.car_item}>
                <img src={pic2} className={style.image} />
              </div>
              <div className={style.car_item}>
                <img src={pic3} className={style.image} />
              </div>
            </Carousel>

            <div style={{ height: "auto" }} className="fixed-top">
              <div className={style.navT}>
                <Navbar style={{ position: "relative" }} expand="lg">
                  <Container>
                    <Navbar.Brand>
                      <NavLink
                        className={style.navB}
                        style={{ color: "white", textDecoration: "none" }}
                        to="/"
                      >
                        {" "}
                        <div class={style.brand_img}>
                          <img src={gerb} />
                        </div>
                        <div class={style.brand_text}>
                          <p className={style.lrt}>
                            O'zbekiston Respublikasi <br /> Jizzax viloyati{" "}
                            <br />xalq ta'limi boshqarmasi{" "}
                          </p>
                          <p>
                            O'zbekiston Respublikasi Jizzax viloyati <br />
                            xalq ta'limi boshqarmasi{" "}
                          </p>
                        </div>
                      </NavLink>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{zIndex:345}} /> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto" id={style.nav}>
                        <Nav.Link
                          style={{ textAlign: "center" }}
                          className={style.birinchi}
                        >
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/"
                          >
                            Bosh sahifa
                          </NavLink>
                        </Nav.Link>
                        <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/rahbariyat"
                          >
                            Rahbariyat
                          </NavLink>
                        </Nav.Link>
                        <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/yangiliklar"
                          >
                            Yangiliklar
                          </NavLink>
                        </Nav.Link>
                        <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/lavhalar"
                          >
                            Fotolavhalar
                          </NavLink>
                        </Nav.Link>
                        <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/hujjatlar"
                          >
                            Hujjatlar
                          </NavLink>
                        </Nav.Link>
                        <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/boglanish"
                          >
                            Bog'lanish
                          </NavLink>
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </div>
            <div
              className={style.navG}
              data-aos={"fade-down"}
              data-aos-anchor-placement={"top-top"}
            >
              <Navbar
                className={style.NavbarMenu}
                style={{ position: "relative" }}
                expand="lg"
              >
                <Navbar.Brand>
                  <NavLink
                    className={style.navB}
                    style={{ color: "white", textDecoration: "none" }}
                    to="/"
                  >
                    {" "}
                    <div class={style.brand_img}>
                      <img src={gerb} />
                    </div>
                    <div class={style.brand_text}>
                    <p className={style.lrt}>
                            O'zbekiston Respublikasi <br /> Jizzax viloyati{" "}
                            <br />xalq ta'limi boshqarmasi{" "}
                          </p>
                          <p>
                            O'zbekiston Respublikasi Jizzax viloyati <br />
                            xalq ta'limi boshqarmasi{" "}
                          </p>
                    </div>
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{ zIndex: 345 }}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto" id={style.nav}>
                    <Nav.Link
                      style={{ textAlign: "center" }}
                      className={style.birinchi}
                    >
                      <NavLink
                        className={style.navlik}
                        style={{ textDecoration: "none" }}
                        to="/"
                      >
                        Bosh sahifa
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link style={{ textAlign: "center" }}>
                      <NavLink
                        className={style.navlik}
                        style={{ textDecoration: "none" }}
                        to="/rahbariyat"
                      >
                        Rahbariyat
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link style={{ textAlign: "center" }}>
                      <NavLink
                        className={style.navlik}
                        style={{ textDecoration: "none" }}
                        to="/yangiliklar"
                      >
                        Yangiliklar
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link style={{ textAlign: "center" }}>
                      <NavLink
                        className={style.navlik}
                        style={{ textDecoration: "none" }}
                        to="/lavhalar"
                      >
                        Fotolavhalar
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link style={{ textAlign: "center" }}>
                          <NavLink
                            className={style.navlik}
                            style={{ textDecoration: "none" }}
                            to="/hujjatlar"
                          >
                            Hujjatlar
                          </NavLink>
                        </Nav.Link>
                    <Nav.Link style={{ textAlign: "center" }}>
                      <NavLink
                        className={style.navlik}
                        style={{ textDecoration: "none" }}
                        to="/boglanish"
                      >
                        Bog'lanish
                      </NavLink>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>

            <div className={style.text}>
              <h1>
                Yoshlarimizning bilim olishi biz uchun katta ahamiyatga ega
              </h1>
            </div>
            <br />
            <div className={style.rahbar}>
              <Row>
                <Col lg="6" md="6" sm="12">
                  <div className={style.ManagerItem}>
                    <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
                      Boshqarma rahbari
                    </h2>
                  </div>
                  <br />
                  <p className={style.fio}>Dilfuza Ro‘ziqulovna Sadriddinova</p>
                  <p className={style.qabul}>
                    Dushanba, Juma - soat 9:00 dan 17:00 gacha
                  </p>
                  <div className={style.icon}>
                    <img src="https://play-lh.googleusercontent.com/9kABykeGovHPy-dN19lRxxnCp8IZK3Pkl8qLFNxrEe-hhKVZeiyhTBEIRUt6t-vhxQ=s180-rw" />
                    <a href="https://archive.uz/source/images/qr_hududiy_arxiv_ishi.pdf">
                      Boshqarma nizomi
                    </a>
                  </div>

                  <div className={style.iconsHead}>
                    <div id={style.mediaa12}>
                      <Tooltip placement="bottom" title="bogot__txtb@umail.uz">
                        {" "}
                        <a
                          target="_blank"
                          // style={{ borderRight: " 1px solid blue" }}
                          id={style.ahref1}
                          className={style.ahref}
                          href={`mailto: bogot__txtb@umail.uz`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div id={style.mediaa12}>
                      <a
                        target="_blank"
                        className={style.ahref}
                        href="https://t.me/bogotijro"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div id={style.mediaa12}>
                      <a
                        target="_blank"
                        className={style.ahref}
                        href=" https://www.instagram.com/bogotxtb/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div id={style.mediaa11}>
                      <a
                        target="_blank"
                        className={style.ahref}
                        href="https://www.facebook.com/bogotxtb"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div id={style.mediaa11}>
                      <a
                        target="_blank"
                        className={style.ahref}
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                    <div id={style.mediaa11}>
                      <Tooltip placement="bottom" title="(8362)31-52-967">
                        {" "}
                        <a
                          target="_blank"
                          className={style.ahref}
                          // style={{
                          //   borderRight: " 0px solid blue",
                          // }}
                          href={`tel: (8362)31-52-967}`}
                        >
                          <i className="fas fa-phone"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  md="12"
                  sm="24"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className={style.colimg1}>
                    <img src={dir2} />
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

              <div className={style.stas_item} id={style.mediaa1}>
                <p>
                  <i className="fas fa-school"></i>
                </p>
                <p className={style.tit}>Maktablar</p>
                <p className={style.num}>350 ta</p>
              </div>
              <div className={style.stas_item} id={style.mediaa1}>
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
                <p className={style.tit}>O'qituvchilar</p>
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic4}
                        />
                        <Card.Body>
                          <p className={style.vaqt}>
                            {" "}
                            <i
                              style={{ marginRight: "10px" }}
                              className="far fa-calendar-alt"
                            ></i>
                            01.08.2022
                          </p>
                          <Card.Text style={{ fontSize: "16px" }}>
                          Xabaringiz bor, ayni kunlarda Rossiya Federasiyasining Vladivostok shahrida VII “Osiyo bolalari” sport o’yinlari davom etmoqda. Bugun Yurtimiz taekvondochilari musobaqani yakunlashdi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className={style.news_item}>
                      <Card
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic5}
                        />
                        <Card.Body>
                          <p className={style.vaqt}>
                            {" "}
                            <i
                              style={{ marginRight: "10px" }}
                              className="far fa-calendar-alt"
                            ></i>
                            12.03.2022
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic6}
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic7}
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic8}
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
                            Mercedes-Benz kompaniyasi S-Class sedanining
                            zirhlangan versiyasini ishlab chiqdi
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className={style.news_item}>
                      <Card
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic9}
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic10}
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic11}
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
                        style={{
                          border: "1px solid lightgrey",
                          height: "400px",
                        }}
                      >
                        <Card.Img
                          className={style.yang1}
                          variant="top"
                          // style={{ height: "250px" }}
                          src={pic12}
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
                            Toyota kompaniyasi Corolla modelining 50
                            millioninchi nusxasini sotdi
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Carousel>
                  <Link to="/yangiliklar" className={style.bar}>
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
                    // src="https://scontent.ftas6-1.fna.fbcdn.net/v/t1.6435-9/133830108_2002413663242809_1340753596329812727_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=gpk8gZgwJXkAX8b3NCo&_nc_ht=scontent.ftas6-1.fna&oh=a2027655adc6c7744e07a79152ca69fd&oe=6165BEE1"
                    src={priz1}
                  />
                </Col>
              </Row>
            </div>
            <div className={style.elem}>
              <Row style={{ alignItems: "center" }}>
                <Col className={style.htr} lg={2} md={12} sm={12}>
                  <h2 className={style.colT}>
                    Bizning ijtimoiy sahifalarimiz:
                  </h2>
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
                    <img src={pic20} />
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
            {/* <br />
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
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={pic13} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Bog'ot tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm1} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Gurlan tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm3} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        	Xonqa tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm2} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                       Shovot tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm5} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                       Urganch shahri xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm8} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                       Urganch tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="bottom" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card  className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm6} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Xazorasp tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm7} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Xiva tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm9}  />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Xonqa tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="top" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>
                        </a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className={style.news_item}>
                  <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                    <Card.Img className={style.news_itemcard2}  variant="top" src={drasm10} />
                    <Card.Body>
                      <Card.Text
                        style={{ fontSize: "16px" }}
                        className={style.ptr}
                      >
                        Yangiariq tumani xaql ta'limi boshqarmasi
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
                        <a
                          target="_blank"
                          href="https://t.me/samarqand_33_maktab"
                        >
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
                      <Tooltip placement="bottom" title="(8362)31-52-967">
                        {" "}
                        <a target="_blank" href={`tel: (8362)31-52-967}`}>
                        <i class="fas fa-phone-alt"></i>

</a>{" "}
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </Carousel>
              <br />
              <Link to="/tumanlar" className={style.bar} id="btr">
                Barcha tuman bo'limlarini ko'rish{" "}
                <i className="fas fa-arrow-right"></i>
              </Link>
              <br />
            </div> <div className="blue"></div>*/}

            <div className={style.gal}>
              <Row>
                <Col lg={4} md={12} sm={12}>
                  <h1 className="title">Video lavhalar</h1>
                  <div className="chiziq1"></div>
                  <br />
                  <YouTube
                    // <iframe width="560" height="315" src="https://www.youtube.com/embed/byPu0TXE5Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    videoId="9Vy77GkjeGI"
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
                      Jizzax viloyati xalq ta'limi boshqarmasiga
                      virtual sayohat qiling va boshqarma haqida ko'proq
                      ma'lumotga ega bo'ling.
                    </i>
                  </p>
                  <Link to="/videos" className={style.bar}>
                    Barcha videolarni ko'rish{" "}
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </Col>
                <Col lg={8} md={12} sm={12} className={style.jtr}>
                  <h1 className="title">Foto lavhalar</h1>
                  <div className="chiziq1"></div>
                  <br />
                  <Row>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm1} />
                    </Col>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm7} />
                    </Col>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm3} />
                    </Col>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm4} />
                    </Col>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm5} />
                    </Col>
                    <Col lg={4} md={4} sm={6} style={{ paddingBottom: "20px" }}>
                      <img src={dxorazm6} />
                    </Col>
                  </Row>
                  <Link to="/lavhalar" className="bar">
                    Barcha rasmlarni ko'rish{" "}
                    <i className="fas fa-arrow-right"></i>
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
                  <p>
                    O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti
                  </p>
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
                          center: [40.109260,67.828364],
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
                            geometry={[40.109260,67.828364]}
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
                      className={style.AdviceImg}
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Col className={style.AdviceImgItem} lg={6} md={6} sm={6}>
                        <a target="_blank" href="https://t.me/bogotijro">
                          <img className={style.str} src={teg} />
                        </a>
                      </Col>
                      <Col className={style.AdviceImgItem} lg={6} md={6} sm={6}>
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
                          <input
                            type="text"
                            placeholder="Ism Familiya Otchistva"
                          />
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
            <FooterA />
          </div>
        )}
      </div>
    );
  }
  //  </div>
  // );
}
