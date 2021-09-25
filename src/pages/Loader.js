import React, { Component } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import "aos/dist/aos.css";
export default class Loader extends Component {
  render() {
    return (
      <div className="loaderT">
        <FadeLoader color="blue" size={120} />
      </div>
    );
  }
}
