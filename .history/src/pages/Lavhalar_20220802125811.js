import React, { Component } from "react";
import FooterA from "./FooterA";
import style from "../css/Lavhalar.module.css";
import NavbarT from "./NavbarT";
import Loader from "./Loader";
import til1 from "../img/til1.jpg"
import til2 from "../img/til2.jpg"
import til3 from "../img/til3.jpg"
import til4 from "../img/til4.jpg"
import til5 from "../img/til5.jpg"
import tash1 from "../img/tash1.jpg"
import tash2 from "../img/tash2.jpg"
import tash3 from "../img/tash3.jpg"
import tash4 from "../img/tash4.jpg"
import tash5 from "../img/tash5.jpg"

export default class Lavhalar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2500);
  }
  render() {
    return (
      <div>
        {this.state.timePassed === false ? (
          // <Loader />
          <div></div>
        ) : (
          <div>
            <NavbarT />
            <div>
              <header className={style.header}>
                <div className={style.badge}>
                  <div className={style.text}>Suratlar</div>
                </div>
              </header>
            </div>
           
            <div className={style.still}>
              <div className={style.container}>
                <div className={style.card}>
                  <img src={tash1} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash2} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash3} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash4} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash5} />
                 
                </div>
              </div>
            </div>
            <hr />
            <h3 className={style.title}>Milliy bayramlar</h3>
            <div className={style.still}>
              <div className={style.container}>
                <div className={style.card}>
                  <img src={til1} />
                 
                </div>
                <div className={style.card}>
                  <img src={til2} />
                 
                </div>
                <div className={style.card}>
                  <img src={til3} />
                 
                </div>
                <div className={style.card}>
                  <img src={til4}/>
                 
                </div>
                <div className={style.card}>
                  <img src={til5} />
                 
                </div>
              </div>
            </div>
            <FooterA />
          </div>
        )}
      </div>
    );
  }
}
