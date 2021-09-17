import React, { Component } from 'react';
import Footer from './FooterA';
import style from '../css/Lavhalar.module.css';
import NavbarT from './NavbarT';



export default class Lavhalar extends Component {
  render() {
    return (
      <div>
        <NavbarT/>
        <div >
        <header className={style.header} >
  <div className={style.badge} >
    <div className={style.text}>Suratlar</div>
  </div>
</header>
    


</div>
        <h3 className={style.title} >Tashkiliy topshiriqlar</h3>
        <div className={style.still}><div className={style.container}>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Al_mabruk_Qorabuloq.jpg"/>
    <div className={style.card__head}>Maktab qurilishi</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/17maktab.jpg"/>
    <div className={style.card__head}>Obod mahalla</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Qorabuloq_kiraverish.jpg"/>
    <div className={style.card__head}>Madiyat ishlari</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Qorabuloq.kollej.jpg/1920px-Qorabuloq.kollej.jpg"/>
    <div className={style.card__head}>Maktab ochilishi</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Qorabuloq.Alisher_Navoiy.jpg/1920px-Qorabuloq.Alisher_Navoiy.jpg"/>
    <div className={style.card__head}>Yutuqlarimiz</div>
  </div>
</div></div>
<hr/>
<h3 className={style.title} >Milliy bayramlar</h3>
        <div className={style.still}><div className={style.container}>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/17maktab.jpg"/>
    <div className={style.card__head}>Plotting Cat</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Arofat_opa.JPG/1280px-Arofat_opa.JPG"/>
    <div className={style.card__head}>Angry Cat</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Qorabuloq_02.jpg/1920px-Qorabuloq_02.jpg"/>
    <div className={style.card__head}>Curious Cat</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Karabula_masjid.jpg/1920px-Karabula_masjid.jpg"/>
    <div className={style.card__head}>Prowling Cat</div>
  </div>
  <div className={style.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Xiyobon.jpg/1920px-Xiyobon.jpg"/>
    <div className={style.card__head}>Sleepy Cat</div>
  </div>
</div></div>
<Footer/>
      </div>
    )
  }
}
