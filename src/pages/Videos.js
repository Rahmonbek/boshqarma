import Footer from "./FooterA";
import React, { Component } from "react";
import NavbarT from "./NavbarT";
import "./videos.css";
import natural from "../video/natural.mp4";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
export default class Videos extends Component {
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
            <div
              style={{
                margin: "auto",
                marginTop: "100px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <header>
                <div class="overlay"></div>
                <video
                  playsinline="playsinline"
                  autoplay="autoplay"
                  muted="muted"
                  loop="loop"
                >
                  <source src={natural} type="video/mp4" />
                </video>
                <div class="container h-100">
                  <div class="d-flex h-100 text-white text-center align-items-center">
                    <div class="w-100 ">
                      <div class="container">
                        <p class="text">
                          O`zbekiston Respublikasi Jizzaxt viloyati xalq ta`lim
                          boshqarmasi
                        </p>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </header>

              <div class="hm-gradient">
                <main>
                  <div class="container mt-4">
                    <div class="text-center darken-grey-text mb-4">
                      <h1
                        class="font-bold mt-4 mb-3 h5"
                        style={{ fontSize: "50px" }}
                      >
                        Video lavhalar
                      </h1>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Responsive video</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>YouTube Iframe</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/v64KOxKVLVg"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>YouTube Iframe</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe
                                class="embed-responsive-item"
                                src="https://www.youtube.com/embed/v64KOxKVLVg"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Vimeo Iframe</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe
                                class="embed-responsive-item"
                                src="https://player.vimeo.com/video/137857207"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Vimeo Iframe</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe
                                class="embed-responsive-item"
                                src="https://player.vimeo.com/video/137857207"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr class="my-4" />

                    <div class="text-center darken-grey-text mb-4">
                      <h3 class="font-bold mb-3">
                        Yangiliklardan Habardor bo`lib turish uchun YouTobe
                        kanalimizga obuna bo`ling:
                      </h3>
                      <a
                        class="btn btn-primary"
                        style={{ marginBottom: "20px" }}
                        href="https://mdbootstrap.com/components/bootstrap-video/"
                        target="_blank"
                      >
                        Obuna bo`lish
                      </a>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
