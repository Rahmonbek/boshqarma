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
                          O`zbekiston Respublikasi Xorazm viloyati Bog`ot tumani xalq ta`lim
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
                  

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Bogʼot tumanidagi 18-sonli umumiy oʼrta taʼlim maktabi </strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
<iframe  width="100%" height="100%"
src="https://www.youtube.com/embed/EHa94tQpqI0?controls=1">
</iframe> 
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
                              <strong>Bogʼot tumanidagi 18-sonli umumiy oʼrta taʼlim maktabi</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
   <iframe  width="100%" height="100%"
src="https://www.youtube.com/embed/EHa94tQpqI0?controls=1">
</iframe> 
              
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Xorazm viloyati Bog'ot tumani 46-son maktabi</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
   <iframe  width="100%" height="100%"
src="https://www.youtube.com/embed/EHa94tQpqI0?controls=1">
</iframe> 
              
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Xorazm viloyati Boģot tumanidagi 9-son maktabi</strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
   <iframe  width="100%" height="100%"
src="https://www.youtube.com/embed/EHa94tQpqI0?controls=1">
</iframe> 
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="card">
                          <div class="card-block p-3">
                            <h3 class="text-center font-up font-bold indigo-text py-2 mb-3">
                              <strong>Xorazm viloyati Bog‘ot tumanidagi 44-son maktab jamoasi </strong>
                            </h3>

                            <div class="embed-responsive embed-responsive-16by9">
   <iframe  width="100%" height="100%"
src="https://www.youtube.com/embed/EHa94tQpqI0?controls=1">
</iframe> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr class="my-4" />

            
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
