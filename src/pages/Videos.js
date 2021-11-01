import Footer from "./FooterA";
import React, { Component } from "react";
import NavbarT from "./NavbarT";
import "./videos.css";
import natural from "../video/natural.mp4";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import YouTube from "@u-wave/react-youtube";

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
        {this.state.timePassed === false ? (
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
                          O'zbekiston Respublikasi Xorazm viloyati Bog'ot tumani
                          xalq ta'lim boshqarmasi
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
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <br />
                        <br />
                        <div class="card">
                          <div class="card-block p-3">
                            <div class="embed-responsive embed-responsive-16by9">
                              <YouTube
                                video="x2cr1d3XNMU"
                                style={{ width: "100%", height: "100%" }}
                                autoplay={true}
                                muted={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <div class="embed-responsive embed-responsive-16by9">
                              <YouTube
                                video="HXktZQ3fhhg"
                                style={{ width: "100%", height: "100%" }}
                                autoplay={true}
                                muted={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <div class="embed-responsive embed-responsive-16by9">
                              <YouTube
                                video="7RPVyqc7Wlw"
                                style={{ width: "100%", height: "100%" }}
                                autoplay={true}
                                muted={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <div class="embed-responsive embed-responsive-16by9">
                              <YouTube
                                video="NSGYPeP6kA0"
                                style={{ width: "100%", height: "100%" }}
                                autoplay={true}
                                muted={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <div class="embed-responsive embed-responsive-16by9">
                            <YouTube
  video="7Ykovrq6hwc"                
  style={{width:'100%', height:'100%'}}
  autoplay={true}
  muted={true}  />
                          </div>
                        </div>
                      </div>

                      <hr class="my-4" />
                    </div>
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
