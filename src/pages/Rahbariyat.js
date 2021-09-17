import React, { Component } from "react";
import NavbarT from "./NavbarT";
import Footer from "./Footer";
import { Modal } from "antd";
import styles from "../css/Rahbariyat.module.css";
import sanakulov from "../img/sanakulov.jpg";
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

import { Button, Card, Col, Row, Container } from "react-bootstrap";

export default class Rahbariyat extends Component {
  state = {
    rahbariyat: [
      {
        id: 1,
        fullName: "Sanaqulov Quvondiq Sanaqulovich",
        phone: "+99879-227-71-54",
        qabul: "9:00 - 13:00",
        email: "info@gmail.com",
        describe: "DASDAdasdasdasd saddasdas dasdasda dasdasdasd",
        lavozimi: "Bosh direktor",
        image: sanakulov,
        daraja: 1,
      },
      {
        id: 2,
        fullName: "Jo'libekov Nurmat Qarshibekovich",
        phone: "+99879-227-71-54",
        qabul: "9:00 - 13:00",
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
        qabul: "9:00 - 13:00",
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
  render() {
    return (
      <div className={styles.rahbariyat}>
        <NavbarT />
        <div>
          <div className={styles.head}>
            <div className={styles.head_text}>
              O'zbekiston Respublikasi Jizzax viloyati xalq ta'limi
              boshqarmasining rahbariyati
            </div>
          </div>
          <div className={styles.rahbariyatTitle}>
            <h3>Rahbariyat</h3>
          </div>
          <div className={styles.line}></div>
          <div className={styles.rahbariyatBody}>
            <Container>
              <Row>
                {this.state.rahbariyat !== []
                  ? this.state.rahbariyat.map((item, key) => {
                      return item.daraja === this.state.daraja ? (
                        <Col lg={9} sm={12}>
                          <div className={styles.card}>
                            <Row>
                              <Col md={4} sm={12}>
                                <img
                                  src={item.image}
                                  style={{ width: "100%", margin: "15px" }}
                                  alt=""
                                />
                              </Col>
                              <Col md={8} sm={12}>
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
                                      onClick={() => this.openModal(key)}
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
                <Col lg={3} sm={6}>
                  dasdasda
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
          footer={
            <Button variant="primary" onClick={() => this.closeModal()}>
              Yopish
            </Button>
          }
          visible={this.state.show}
          style={{ zIndex: "9456", top: "150px", border: "#1150e6" }}
        >
          <Row>
            <Col lg={4}>
              <img src={this.state.image} alt="" style={{ width: "100%" }} />
            </Col>
            <Col lg={8}>
              <p>
                <b>Rahbar F.I.Sh. si:</b> {this.state.fullName}
              </p>
              <p>
                <b>Rahbar lavozimi:</b> {this.state.lavozimi}
              </p>
              <p>
                <b>Rahbar telefon raqami:</b> {this.state.phone}
              </p>
              <p>
                <b>Rahbar elektron pochtasi:</b> {this.state.email}
              </p>
              <p>
                <b>Rahbar haqida qo'shimcha ma'lumot:</b> {this.state.describe}
              </p>
            </Col>
          </Row>
        </Modal>
        <Footer />
      </div>
    );
  }
}
