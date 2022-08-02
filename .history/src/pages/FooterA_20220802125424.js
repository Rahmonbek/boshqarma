import React, { Component } from "react";
import gerb from "../img/gerb.png";
import "../css/FooterA.css";
export default class Boglanish extends Component {
  render() {
    return (
      <div className="foot">
        <div className="page-wrapper">
          <div id="waterdrop"></div>
          <footer>
            <div className="footer-top">
              <div className="pt-exebar"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                    <div className="widget footer_widget">
                      <h5 className="footer-title">Manzil:</h5>
                      <div className="gem-contacts">
                        <div className="gem-contacts-item gem-contacts-address">
                          Bosh Office :<br />220200, Bog‘ot shaharchasi, O‘zbekiston ko‘chasi, 11-uy. 
                          Tel/faks: (8362)31-52-967, 
                        </div>
                        <div className="gem-contacts-item gem-contacts-phone">
                          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                          Tel: <a href="Tel:+996487223">(8362)31-52-967</a>
                        </div>

                        <div className="gem-contacts-item gem-contacts-address mt-2">
                          Qo`shimcha Office :<br />220200, Bog‘ot shaharchasi, O‘zbekiston ko‘chasi, 11-uy. 
                          Tel/faks: (8362)31-52-967, 
                        </div>
                        <div className="gem-contacts-item gem-contacts-phone">
                          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                          Tel: <a>(8362)31-52-967</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="widget footer_widget">
                          <h5 className="footer-title">Yo'riqnoma:</h5>
                          <ul className="posts  styled">
                            <li className="clearfix gem-pp-posts">
                              <div className="gem-pp-posts-text">
                                <div className="gem-pp-posts-item">
                                  <a href="#">
                                    Bo'sh ish o`rinlari va ish masalasi bo`yicha.
                                  </a>
                                </div>
                                <div className="gem-pp-posts-date">
                                  Tel: (8362)31-52-967
                                </div>
                              </div>
                            </li>
                            <li className="clearfix gem-pp-posts">
                              <div className="gem-pp-posts-text">
                                <div className="gem-pp-posts-item">
                                  <a href="#">
                                    Kredit masalasi xususiy tadbirkorlik
                                    bo`yicha.
                                  </a>
                                </div>
                                <div className="gem-pp-posts-date">
                                  Tel: (8362)31-52-967 , (8362)31-52-967
                                </div>
                              </div>
                            </li>
                            <li className="clearfix gem-pp-posts">
                              <div className="gem-pp-posts-text">
                                <div className="gem-pp-posts-item">
                                  <a href="">
                                    Ta'lim tizimi va boshqa masalalar bo`yicha.
                                  </a>
                                </div>
                                <div className="gem-pp-posts-date">
                                  Tel: (8362)31-52-967 , (8362)31-52-967
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="widget">
                          <h5 className="footer-title">Bog`lanish</h5>
                          <div className="textwidget">
                            <div
                              role="form"
                              className="wpcf7"
                              id="wpcf7-f4-o1"
                              lang="en-US"
                              dir="ltr"
                            >
                              <form
                                method="post"
                                className="wpcf7-form"
                                novalidate="novalidate"
                              >
                                <div className="contact-form-footer">
                                  <p>
                                    <span className="wpcf7-form-control-wrap your-first-name">
                                      <input
                                        type="text"
                                        name="your-first-name"
                                        value=""
                                        size="40"
                                        rows="10"
                                        className="wpcf7-form-control wpcf7-text"
                                        aria-invalid="false"
                                        placeholder="F. I .SH"
                                      />
                                    </span>
                                  </p>
                                  <p>
                                    <span className="wpcf7-form-control-wrap your-email_1">
                                      <input
                                        type="text"
                                        name="your-email_1"
                                        value=""
                                        size="40"
                                        rows="10"
                                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email"
                                        aria-invalid="false"
                                        placeholder="Telefon raqamingiz"
                                      />
                                    </span>
                                  </p>
                                  <p>
                                    <span className="wpcf7-form-control-wrap your-message">
                                      <textarea
                                        name="your-message"
                                        cols="40"
                                        rows="10"
                                        className="wpcf7-form-control wpcf7-textarea"
                                        aria-invalid="false"
                                        placeholder="Xabar yuborish.."
                                      ></textarea>
                                    </span>
                                  </p>
                                  <div>
                                    <input
                                      type="submit"
                                      value="Send"
                                      className="wpcf7-form-control wpcf7-submit"
                                    />
                                    <span className="ajax-loader"></span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                    <div className="widget widget_gallery gallery-grid-4">
                      <h5 className="footer-title">Idoramiz:</h5>
                      <ul className="magnific-image">
                        <a className="magnific-anchor">
                          <img
                            src={gerb}
                            style={{
                              padding: "30px",
                              boxShadow: "0px 0px 50px black",
                              borderRadius: "10px",
                            }}
                            alt=""
                          />
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="footer-site-info">
                      2021 ©{" "}
                      <a
                      title="tel:+998 93 082 03 72"
                        href="tel:+998 93 082 03 72"
                        target="_blank"
                      >
                       
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <nav
                      id="footer-navigation"
                      className="site-navigation footer-navigation centered-box"
                      role="navigation"
                    >
                      <ul
                        id="footer-menu"
                        className="nav-menu styled clearfix inline-inside"
                      >
                        <li
                          id="menu-item-26"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                        >
                          <a href="#">Bosh Saxifa</a>
                        </li>
                        <li
                          id="menu-item-27"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"
                        >
                          <a href="#">Yangiliklar</a>
                        </li>
                        <li
                          id="menu-item-28"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"
                        >
                          <a href="#">Fotolavhalar</a>
                        </li>
                        <li
                          id="menu-item-29"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"
                        >
                          <a href="#">Bog`lanish</a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="col-md-3">
                    <div id="footer-socials">
                      <div className="socials inline-inside socials-colored">
                        <a
                          href="https://www.facebook.com/bogotxtb"
                          target="_blank"
                          title="Facebook"
                          className="socials-item"
                        >
                          <i className="fab fa-facebook-f facebook"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/bogotxtb"
                          target="_blank"
                          title="Twitter"
                          className="socials-item"
                        >
                          <i className="fab fa-twitter twitter"></i>
                        </a>
                        <a
                          href=" https://www.instagram.com/bogotxtb/"
                          target="_blank"
                          title="Instagram"
                          className="socials-item"
                        >
                          <i className="fab fa-instagram instagram"></i>
                        </a>
                        <a
                          href="https://t.me/bogotijro"
                          target="_blank"
                          title="YouTube"
                          className="socials-item"
                        >
                          <i className="fab fa-youtube youtube"></i>
                        </a>
                        <a
                          href="https://t.me/bogotijro"
                          target="_blank"
                          title="Telegram"
                          className="socials-item"
                        >
                          <i className="fab fa-telegram telegram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
