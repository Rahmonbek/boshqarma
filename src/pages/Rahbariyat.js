import React, { Component } from "react";
import NavbarT from "./NavbarT";
import FooterA from "./FooterA";
import { Modal } from "antd";
import styles from "../css/Rahbariyat.module.css";
import rahbar from "../img/rahbar.jpg";
import sharahmetov from "../img/sharahmetov.jpg";
import djulibekov from "../img/djulibekov.jpg";

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";

import {
  Button,
  // Card,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import Loader from "./Loader";

export default class Rahbariyat extends Component {
  state = {
    timePassed: false,
    rahbariyat: [
      {
        id: 1,
        fullName: "Sanaqulov Quvondiq Sanaqulovich",
        phone: "+99879-227-71-54",
        qabul: "Dushanba - Juma 9:00 - 13:00",
        email: "info@gmail.com",
        describe: "DASDAdasdasdasd saddasdas dasdasda dasdasdasd",
        lavozimi: "Bosh direktor",
        image: rahbar,
        daraja: 1,
      },
      {
        id: 2,
        fullName: "Jo'libekov Nurmat Qarshibekovich",
        phone: "+99879-227-71-54",
        qabul: "Dushanba - Juma 9:00 - 13:00",
        email: "info@gmail.com",
        describe: "DASDAdasdasdasd saddasdas dasdasda dasdasdasd",
        lavozimi: "Bosh direktor o'rinbosari",
        image: djulibekov,
        daraja: 1,
      },
      {
        id: 3,
        fullName: "DASDASDSAD dasdasdas dsadasdasd",
        phone: "+99879-227-71-54",
        qabul: "Dushanba - Juma 9:00 - 13:00",
        email: "info@gmail.com",
        describe: "DASDAdasdasdasd saddasdas dasdasda dasdasdasd",
        lavozimi: "Bosh direktor o'rinbosari",
        image: sharahmetov,
        daraja: 2,
      },
    ],
    show: false,
    image: null,
    fullName: "",
    phone: "",
    email: "",
    describe: "",
    lavozimi: "",
    daraja: 1,
  };
  openModal = (id) => {
    this.setState({
      show: true,
      fullName: this.state.rahbariyat[id].fullName,
      phone: this.state.rahbariyat[id].phone,
      email: this.state.rahbariyat[id].email,
      describe: this.state.rahbariyat[id].describe,
      image: this.state.rahbariyat[id].image,
      lavozimi: this.state.rahbariyat[id].lavozimi,
    });
  };
  closeModal = () => {
    this.setState({
      show: false,
      fullName: "",
      phone: "",
      email: "",
      describe: "",
      image: null,
      lavozimi: "",
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2500);
  }
  render() {
    return (
      <div>
        {this.state.timePassed == false ? (
          <Loader />
        ) : (
          <div className={styles.rahbariyat}>
            <NavbarT />
            <div>
              <div className={styles.head}>
                <div className={styles.head_text}>
                  O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani xalq ta'limi
                  boshqarmasining rahbariyati
                </div>
              </div>
              <div className={styles.rahbariyatTitle}>
                <h3>Rahbariyat</h3>
              </div>
              <div className={styles.line}></div>
              <div className={styles.rahbariyatBody}>
                <Container fluid>
                  <Row>
                    <Col lg={9} sm={12}>
                      <Row>
                        {this.state.rahbariyat !== []
                          ? this.state.rahbariyat.map((item, key) => {
                              return item.daraja === this.state.daraja ? (
                                <Col lg={12} md={12} sm={12}>
                                  <div className={styles.card}>
                                    <Row>
                                      <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                        <img src={item.image} alt="" />
                                      </Col>
                                      <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                        <div className={styles.cardBody}>
                                          <h4>{item.lavozimi}</h4>
                                          <h4>{item.fullName}</h4>
                                          <h6>
                                            <b>Qabul:</b> {item.qabul}
                                          </h6>
                                          <h6>
                                            <b>Telefon:</b> {item.phone}
                                          </h6>
                                          <h6>
                                            <b>Email:</b> {item.email}
                                          </h6>
                                          <div className={styles.cardBodyBtn}>
                                            <Button
                                              style={{
                                                backgroundColor: "#1105e6",
                                                borderRadius: "none",
                                              }}
                                              onClick={() =>
                                                this.openModal(key)
                                              }
                                              className={styles.btn}
                                            >
                                              Batafsil
                                            </Button>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </Row>
                    </Col>
                    <Col lg={3} sm={12}>
                      <div className={styles.card1}>
                        {/* <h4 style={{ textAlign:"center",color:"rgb(11, 0, 36)",fontSize:"30px" }}>Rahbariyat</h4> */}
                        {/* <div className={styles.line}></div> */}
                     <img src="https://storage.kun.uz/source/4/-6TTtUhrlyWnlYMZt67cdHHPOurXdggs.jpg" style={{width:'100%'}}/>
                        {/* <Button
                      variant="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => this.setState({ daraja: 1 })}
                    >
                      Rahbariyat
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.setState({ daraja: 2 })}
                    >
                      Xodimlar
                    </Button> */}
                      </div>
                    </Col>
                  </Row>
                </Container>
                {/* <div className={styles.cardButton}>
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => this.setState({ daraja: 1 })}
              >
                Rahbariyat
              </Button>
              <Button
                variant="primary"
                onClick={() => this.setState({ daraja: 2 })}
              >
                Xodimlar
              </Button>
            </div> */}
                {/* <div className={styles.cards}>
              <Row>
                {this.state.rahbariyat !== []
                  ? this.state.rahbariyat.map((item, key) => {
                      return item.daraja === this.state.daraja ? (
                        // <Col
                        //   className={styles.cardsCol}
                        //   xxl={2}
                        //   xl={3}
                        //   lg={3}
                        //   md={4}
                        //   sm={6}
                        //   xs={12}
                        // >
                        //   <Card
                        //     style={{
                        //       width: "100%",
                        //       boxShadow:
                        //         "rgba(17, 5, 230, 0.4) 0px 0px 0px 2px, rgba(17, 5, 230, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                        //     }}
                        //   >
                        //     <Card.Img variant="top" src={item.image} />
                        //     <Card.Body>
                        //       <Card.Text>
                        //         <p style={{ textAlign: "center" }}>
                        //           <b>{item.fullName}</b>
                        //         </p>
                        //         <p style={{ textAlign: "center" }}>
                        //           <b>{item.lavozimi}</b>
                        //         </p>
                        //         <p style={{ marginTop: "25px" }}>
                        //           <b>Telefon raqami:</b> {item.phone}
                        //         </p>
                        //         <p>
                        //           <b>Email:</b> {item.email}
                        //         </p>
                        //       </Card.Text>
                        //       <Button
                        //         variant="primary"
                        //         onClick={() => this.openModal(key)}
                        //       >
                        //         Ma'lumot
                        //       </Button>
                        //     </Card.Body>
                        //   </Card>
                        // </Col>
                        // <MDBCard style={{ maxWidth: "22rem" }}>
                        //   <MDBCardImage
                        //     src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
                        //     position="top"
                        //     alt="..."
                        //     style={{ width: "100%" }}
                        //   />
                        //   <MDBCardBody>
                        //     <MDBCardTitle>Card title</MDBCardTitle>
                        //     <MDBCardText>
                        //       Some quick example text to build on the card title
                        //       and make up the bulk of the card's content.
                        //     </MDBCardText>
                        //     <MDBBtn href="#">Button</MDBBtn>
                        //   </MDBCardBody>
                        // </MDBCard>
                        <Col
                          className={styles.cardsCol}
                          xxl={2}
                          xl={3}
                          lg={3}
                          md={4}
                          sm={6}
                          xs={12}
                        >
                          <div className={styles.maincontainer}>
                            <div className={styles.back}>
                              <h2 className={styles.backH2}>
                                <b>{item.fullName}</b>
                              </h2>
                              <p className={styles.backp}>
                                <b>Tel. raqami:</b> {item.phone}
                              </p>
                              <p className={styles.backp}>
                                <b>Email:</b> {item.email}
                              </p>
                              <p className={styles.backp}>
                                <b>Ma'lumot:</b> {item.describe}
                              </p>
                            </div>
                            <div className={styles.front}>
                              <div>
                                <div className={styles.overlay}></div>
                                <img
                                  className={styles.image}
                                  alt=""
                                  src={item.image}
                                  style={{ width: "302px", height: "290px" }}
                                />
                              </div>
                              <div className={styles.frontText}>
                                <h2 className={styles.frontH2}>
                                  <span>{item.lavozimi}</span>
                                  <br />
                                  {item.fullName}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ) : (
                        ""
                      );
                    })
                  : ""}
              </Row>
            </div> */}
              </div>
            </div>
            <Modal
              title="Rahbar haqida ma'lumotlar"
              // centered
              onCancel={() => this.closeModal()}
              zIndex="6524"
              centered
              footer={
                <Button variant="primary" onClick={() => this.closeModal()}>
                  Yopish
                </Button>
              }
              visible={this.state.show}
            >
              <Row>
                <Col md={4} style={{ minHeight: "320px" }}>
                  <img
                    src={this.state.image}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col
                  md={8}
                  className={styles.modalBody}
                  style={{ minHeight: "320px" }}
                >
                  <p style={{ textAlign: "center", marginBottom: "0" }}>
                    {this.state.lavozimi}
                  </p>
                  <p style={{ textAlign: "center" }}>{this.state.fullName}</p>
                  <p>Qo'shimcha ma'lumot: {this.state.describe}</p>
                </Col>
              </Row>
            </Modal>
            <FooterA />
          </div>
        )}
      </div>
    );
  }
}
