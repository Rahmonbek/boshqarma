import React, { Component } from "react";
import style from "../css/Navbar.module.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink,} from 'react-router-dom'
import gerb from "../img/gerb.png";

export default class NavbarT extends Component {
  render() {
    return (
      <div>
      <div
        className={style.navG}
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
            <Nav.Link style={{textAlign:"center", width:'190px'}} className={style.birinchi}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/">
    Bosh sahifa
            </NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/rahbariyat">Rahbariyat</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/yangiliklar">Yangiliklar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/tumanlar">Tumanlar</NavLink></Nav.Link>
        <Nav.Link style={{textAlign:"center", width:'190px'}}><NavLink className={style.navlik} style={{textDecoration:'none'}} to="/boglanish">Bog'lanish</NavLink></Nav.Link>
    </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </div>
    );
  }
}
