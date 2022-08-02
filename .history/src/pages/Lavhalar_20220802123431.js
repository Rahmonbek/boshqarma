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
      timePassed: false,
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
        {this.state.timePassed == false ? (
          <Loader />
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
            <h3 className={style.title}>Tashkiliy topshiriqlar</h3>
            <div className={style.still}>
              <div className={style.container}>
                <div className={style.card}>
                  <img src="https://telegra.ph/file/42b77ca090a647c5f5d6c.jpg" />
                  <div className={style.card__head}>Majlis jarayoni</div>
                </div>
                <div className={style.card}>
                  <img src="https://telegra.ph/file/7367cb57f8f72240c7e8d.jpg" />
                  <div className={style.card__head}>Taqdirlash marosimi</div>
                </div>
                <div className={style.card}>
                  <img src="https://telegra.ph/file/8826f1e7dfe9e79195730.jpg" />
                  <div className={style.card__head}>Taqdirlash marosimi</div>
                </div>
                <div className={style.card}>
                  <img src="https://telegra.ph/file/e873fa99463535a46e774.jpg" />
                  <div className={style.card__head}>Taqdirlash marosimi</div>
                </div>
                <div className={style.card}>
                  <img src="https://telegra.ph/file/eb7a95c1cbb8fd2eda1bb.jpg" />
                  <div className={style.card__head}>Faxriylar bilan surat</div>
                </div>
              </div>
            </div>
            <hr />
            <h3 className={style.title}>Milliy bayramlar</h3>
            <div className={style.still}>
              <div className={style.container}>
                <div className={style.card}>
                  <img src={til1} />
                  <div className={style.card__head}>Ona tili bayrami </div>
                </div>
                <div className={style.card}>
                  <img src={til2} />
                  <div className={style.card__head}>Til haqida she`rlar</div>
                </div>
                <div className={style.card}>
                  <img src={til3} />
                  <div className={style.card__head}>Tarixiy sahna ko`rinishi</div>
                </div>
                <div className={style.card}>
                  <img src={til4}/>
                  <div className={style.card__head}>Ajoyib raqslar</div>
                </div>
                <div className={style.card}>
                  <img src={til5} />
                  <div className={style.card__head}>Jamoviy surat</div>
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
