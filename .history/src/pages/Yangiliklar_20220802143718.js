import React, { Component } from "react";
import yangilik1 from "../img/shaxmat.jpg";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import styles from "../css/yangiliklar.module.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { getNews } from "../host/Config";
import FadeLoader from "react-spinners/FadeLoader";
import { Carousel } from "antd";
import Footer from "./FooterA";
import NavbarT from "./NavbarT";

// import {DownCircleOutlined} from '@ant-design/icons'

export default class Yangiliklar extends Component {
  state = {
    news: [],
    id: 0,
    loader: true,
  };

  getNews = () => {
    getNews()
      .then((res) => {
        this.setState({
          news: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loader: false,
        });
      });
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getNews();
  }
  render() {
    const contentStyle = {
      width: "100%",
      objectFit: "cover",
      color: "#fff",
      lineHeight: "30vh",
      textAlign: "center",
      fontFamily: "Lobster",
    };
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            {/* ============Header============== */}
            <NavbarT />
            <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Jizzax viloyati xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div>
            {/* <div className={styles.headerImage}>
              <div className={styles.overlay}></div>
              <div
                className={styles.headerSliderText}
                style={{
                  fontFamily: "Lobster",
                  zIndex: "100",
                  paddingTop: "60px",
                }}
              >
                <h3 style={{ fontFamily: "Lobster", zIndex: "100" }}>
                  Boshqarmamizning so'ngi yangiliklari bilan tanishing
                </h3>
              </div>
            </div> */}

            {/* <Carousel autoplay className={styles.sliderContainer}>
              {
                            this.state.news.map(item=>{
                              return(
                                <div>
                                <img src={item.image} style={{width:'100%', height:'100vh',zIndex:'-100'}} className={styles.headerImage}/> 
                                             
                                </div>
                                
                              )
                            })
                          }
              <div className={styles.sliderIMG}>
                <img alt="" src={new1} />
              </div>
              <div className={styles.sliderIMG}>
                <img alt="" src={new2} />
              </div>
              <div className={styles.sliderIMG}>
                <img alt="" src={new3} />
              </div>
              <div className={styles.sliderIMG}>
                <img alt="" src={new4} />
              </div>
            </Carousel> */}
            {/* ==================Section===================== */}

            <Container fluid>
              <div className={styles.yangi}>
                <h1 style={{ fontSize: "60px" }} data-aos="fade-up">
                  Yangiliklar
                </h1>
              </div>
              <div className={styles.line} data-aos="fade-up"></div>
              <Row>
                <Col lg={7}>
                  {this.state.news.length !== 0 ? (
                    <div className={styles.news} data-aos="zoom-in-right">
                      <img
                        src={yangilik1}
                        alt="Foto lavha"
                      />
                      <h3>BOGʼOTLIK ShАXMАTChILАR UMUMJАMOА HISOBIDА BIRINChI BOʼLIShDI!</h3>

                      <p className={styles.date}>
                        <i
                          style={{ marginRight: "10px" }}
                          class="far fa-calendar-alt"
                        ></i>
                        {this.state.news[
                          this.state.id
                        ].published_time.substring(0, 10)}
                      </p>
                      <p style={{ height: "100%" }}>
                      22 oktyabrь sanasida Urganch shahrida shaxmat sport turi boʼyicha maktab oʼquvchilarining Respublika chempionati viloyat bosqichi boʼlib oʼtdi. Qizgʼin kurashlarga boy boʼlgan bahslarda Bogʼot tumani 47-son IDUM oʼquvchilari Olimboev Muhammadjon va Olimboeva Husnida, 6-son maktab oʼquvchisi Rahimberdieva Ruxshona va 2-son maktab oʼquvchisi Karimov Muhammadjonlar faxrli 1-oʼrinni qoʼlga kiritishib, joriy yilning 3 noyabrь sanasida boshlanadigan Respublika chempionatiga yoʼllanma olishdi. 
Taʼlim tarbiya berayotgan maktab jamoasini va ustozlariga tashakkur bildiramiz!
Bogʼot tumani jamoasi umumiy hisobda birinchi oʼrinni olishdi!
Ushbu aql gimnastika sohiblariga Oʼzbekiston chempionatida omad tilaymiz!
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={5}>
                  <div className={styles.recent_news} data-aos="zoom-in-left">
                    <div className={styles.title}>
                      <h3>So'nggi yangiliklar</h3>
                    </div>
                    <div className={styles.body}>
                      <Row>
                      <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginBottom: "10px" }}
                              className={styles.body_card}
                            >
                              <MDBCard
                              
                                style={{
                                  maxWidth: "540px",
                                  borderRadius: "10px",
                                }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol md="4">
                                    <MDBCardImage
                                      src={new1}
                                      alt="..."
                                      fluid
                                      style={{
                                        margin: "7px",
                                        borderRadius: "5px",
                                      }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody>
                                      <MDBCardTitle>Bogot tumani istiroxat bogida Yoshlarni vatanparvarlik ruhida tarbiyalash boʼyicha oʼtkazilgan tadbirda 5-son maktab oʼquvchisi Urinboev Foziljon Stol armrestling boʼyicha faxrli 1-oʼrinni qoʼlga kiritdi</MDBCardTitle>

                                      <MDBCardText>
                                        <small className="text-muted">
                                          <p
                                            className={styles.date}
                                            style={{ fontSize: "15px" }}
                                          >
                                            <i
                                              style={{ marginRight: "10px" }}
                                              class="far fa-calendar-alt"
                                            ></i>
                                          2021-09-07
                                          </p>{" "}
                                        </small>
                                      </MDBCardText>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </Col>
                            <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginBottom: "10px" }}
                              className={styles.body_card}
                            >
                              <MDBCard
                              
                                style={{
                                  maxWidth: "540px",
                                  borderRadius: "10px",
                                }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol md="4">
                                    <MDBCardImage
                                      src={new2}
                                      alt="..."
                                      fluid
                                      style={{
                                        margin: "7px",
                                        borderRadius: "5px",
                                      }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody>
                                      <MDBCardTitle>Bog‘ot tumanidagi 39-son maktabning 1-sinf o‘quvchisi Ramatullayeva Munira 2014-yilda tug‘ilgan gimnastikachi qizlar o‘rtasida Sirdaryo viloyati ochiq turnirida fahrli 1-o‘rinni egalladi.</MDBCardTitle>

                                      <MDBCardText>
                                        <small className="text-muted">
                                          <p
                                            className={styles.date}
                                            style={{ fontSize: "15px" }}
                                          >
                                            <i
                                              style={{ marginRight: "10px" }}
                                              class="far fa-calendar-alt"
                                            ></i>
                                          2021-09-13
                                          </p>{" "}
                                        </small>
                                      </MDBCardText>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </Col>

                            <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginBottom: "10px" }}
                              className={styles.body_card}
                            >
                              <MDBCard
                              
                                style={{
                                  maxWidth: "540px",
                                  borderRadius: "10px",
                                }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol md="4">
                                    <MDBCardImage
                                      src={new3}
                                      alt="..."
                                      fluid
                                      style={{
                                        margin: "7px",
                                        borderRadius: "5px",
                                      }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody>
                                      <MDBCardTitle>27-сон мактабда узбек тилига Давлат тили макоми берилганлигининг 32 йиллигига багишлаб "Кадринг баланд булсин- Она тилим" мавзусида кеча ташкил этилди.</MDBCardTitle>

                                      <MDBCardText>
                                        <small className="text-muted">
                                          <p
                                            className={styles.date}
                                            style={{ fontSize: "15px" }}
                                          >
                                            <i
                                              style={{ marginRight: "10px" }}
                                              class="far fa-calendar-alt"
                                            ></i>
                                          2021-10-21
                                          </p>{" "}
                                        </small>
                                      </MDBCardText>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </>
        )}
      </div>
    );
  }
}
