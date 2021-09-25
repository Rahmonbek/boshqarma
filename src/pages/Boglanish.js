import React, { Component } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Footer from "./FooterA";
import Loader from "./Loader";
import NavbarT from "./NavbarT";
export default class Boglanish extends Component {
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

            <h1
              style={{
                margin: "auto",
                textAlign: "center",
                marginTop: "160px",
                marginBottom: "50px",
              }}
            >
              Bizning Manzilimiz
            </h1>

            <YMaps>
              <div>
                <Map
                  width="100%"
                  height="60vh"
                  defaultState={{ center: [41.263795, 69.22599], zoom: 12 }}
                >
                  <Placemark geometry={[41.263795, 69.22599]} />
                </Map>
              </div>
            </YMaps>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}
