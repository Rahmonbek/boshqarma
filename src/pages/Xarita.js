import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";
import style from "../css/Dashboard.module.css";
import GridLoader from "react-spinners/GridLoader";
import person from "../img/boy.png";
import "antd/dist/antd.css";
import axios from "axios";
import { url } from "../host/Host";
import { message } from "antd";
import Footer from "./Footer";
import NavbarT from "./NavbarT";
import Loader from "./Loader";

export const Xarita=()=> {
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([
    {params:[41.352072,60.815304],
      nomi:'1-maktab'},
      {params:[41.341634,60.786080],
        nomi:'2-maktab'},
        {params:[41.334545,60.835895],
          nomi:'3-maktab'},
          {params:[41.347175,60.788851],
            nomi:'4-maktab'},
            {params:[41.344727,60.807918],
              nomi:'5-maktab'},
              {params:[41.345629,60.814102],
                nomi:'6-maktab'},
                {params:[41.338669,60.828703],
                  nomi:'7-maktab'},
                  {params:[41.355294,60.824386],
                    nomi:'8-maktab'},
                    {params:[41.368435,60.806887],
                      nomi:'9-maktab'},
                      {params:[41.361221,60.790893],
                        nomi:'10-maktab'},
                        ]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    // axios.get(`${url}/kg/`).then((res) => {
    //   setData(res.data);
    //   setPoints(res.data);
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setUser([position.coords.latitude, position.coords.longitude]);
      // });
    //   var coord = [];
    //   res.data.map((item) =>
    //     item.paramss !== null ? coord.push(item.paramss) : coord.push([])
    //   );
    //   setCoor(coord);
    //   setLoading(false);
    // });
    navigator.geolocation.getCurrentPosition(function (position) {
      setUser([position.coords.latitude, position.coords.longitude]);
    });
    setTimeout(()=>{
      setLoading(false);
    }, 6000)

  }, []);

  
  return (
    <>
      {loading ? (
       <Loader />
        ) : (
        <>
        <NavbarT/>
          <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
            <Map
              width="100vw"
              height="95vh"
              state={{
                center: data[0].params,
                zoom:13,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {data.map((info, index) => {
                  return (
                    // <a href="http://maktablar.bogot47idum.uz/" traget="_blank">
                    <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                        info.params !== null
                          ? info.params
                          : message.info("Param mavjuda emas")
                      }
                     
                      options={{
                        preset: "islands#greenDotIconWithCaption",
                        iconColor: "#aeca3b",
                        iconLayout: "default#image",
                      }}
                      properties={{
                        hintContent: `<h6><b className="personStyle">${info.nomi}</b></h6>`,
                      }}
                      modules={["geoObject.addon.hint"]}
                    />
                    // </a>
                  );
                })}
              </Clusterer>
              {isNaN(user[0]) || isNaN(user[1]) ? (
                ""
              ) : (
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={user !== null ? user : []}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person,
                      iconImageSize: [40, 60],
                      iconImageOffset: [-1, -28],
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">Siz</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              )}
              
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
          <Footer />
        </>
      )}
     
    </>
  );
}

