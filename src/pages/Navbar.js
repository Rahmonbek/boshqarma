import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import { Nav, Container, Row, Col, Card, NavLink } from "react-bootstrap";
import gerb from "../img/gerb.png";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className={style.navG}
        data-aos="fade-bottom"
        data-aos-anchor-placement="top-top"
      >
        <Navbar style={{ position: "relative" }} expand="lg">
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
                <p>
                  O'zbekiston Respublikasi Jizzax viloyati <br /> xalq ta'limi
                  boshqarmasi{" "}
                </p>
              </div>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ textAlign: "center", width: "190px" }}
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
              <Nav.Link style={{ textAlign: "center", width: "190px" }}>
                <NavLink
                  className={style.navlik}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Rahbariyat
                </NavLink>
              </Nav.Link>
              <Nav.Link style={{ textAlign: "center", width: "190px" }}>
                <NavLink
                  className={style.navlik}
                  style={{ textDecoration: "none" }}
                  to="/yangiliklar"
                >
                  Yangiliklar
                </NavLink>
              </Nav.Link>
              <Nav.Link style={{ textAlign: "center", width: "190px" }}>
                <NavLink
                  className={style.navlik}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Tumanlar
                </NavLink>
              </Nav.Link>
              <Nav.Link style={{ textAlign: "center", width: "190px" }}>
                <NavLink
                  className={style.navlik}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Bog'lanish
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
