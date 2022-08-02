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
                  <img src={tash} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash} />
                 
                </div>
                <div className={style.card}>
                  <img src={tash} />
                 
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
