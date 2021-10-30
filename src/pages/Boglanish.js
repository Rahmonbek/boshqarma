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
        {this.state.timePassed === false ? (
          <Loader />
        ) : (
          <div>
            <NavbarT />

            <h2
              style={{
                margin: "auto",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "160px",
                width: "300px",
                marginBottom: "50px",
                borderBottom: "3px solid blue",
              }}
            >
              Bizning Manzilimiz
            </h2>

            <YMaps>
              <div>
                <Map
                  width="100%"
                  height="60vh"
                  defaultState={{ center: [41.357659, 60.814373], zoom: 12 }}
                >
                  <Placemark geometry={[41.357659, 60.814373]} />
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
