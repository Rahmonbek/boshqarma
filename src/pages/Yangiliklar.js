import React, { Component } from "react";
import yangilik1 from "../img/shaxmat.jpg";
import yangilik2 from "../img/yangilik2.jpg";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import new4 from "../img/new4.jpg";
import styles from "../css/yangiliklar.module.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { getNews } from "../host/Config";
import FadeLoader from "react-spinners/FadeLoader";
import { Carousel } from "antd";
import Footer from "./FooterA";
import NavbarT from "./NavbarT";
import { Collapse  } from "antd";
const { Panel } = Collapse;

// import {DownCircleOutlined} from '@ant-design/icons'

export default class Yangiliklar extends Component {
  state={
    loader:true,
   news:null,
    school:null,
  
}
getNews = () => {
    getNews()
      .then((res) => {
      this.setState({
        news:res.data
      })
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  componentDidMount() {
    
    this.getNews();

   
    }
  
  render() {
    const contentStyle = {
      width: "100%",
      objectFit: "cover",
      color: "#fff",
      lineHeight: "30vh",
      textAlign: "center",
      fontFamily: "Lobster",
    };
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            {/* ============Header============== */}
            <NavbarT />
            <div className={styles.head}>
              <div className={styles.head_text}>
                O'zbekiston Respublikasi Xorazm viloyati Bog`ot tumani  xalq ta'limi
                boshqarmasining yangiliklari
              </div>
            </div>
          
            <div className={styles.newsY}>
<Collapse accordion defaultActiveKey={['0']}>
    {this.state.news!==null?this.state.news.map((item, key)=>{
return(
<Panel header={item.title} key={key}>
      <div>
          <Container>
              <div className={styles.imag}>
                  <img src={item.image}/>
              </div>
              <div className={styles.yozuv}>
                  <h1>{item.title}</h1>
                  <p><i className="fa fa-calendar"></i>{item.published_time.substring(0,10)}</p>
                  <p>{item.text}</p>
              </div>
          </Container>
      </div>
    </Panel>
  
)
    }):''}
    </Collapse>
</div>
            <Footer />
          </>
        )}
      </div>
    );
  }
}
