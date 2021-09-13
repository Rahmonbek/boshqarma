import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import bog from '../css/Boglanish.module.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import Footer from './Footer'
import NavbarT from './NavbarT'
export default class Boglanish extends Component {
  render() {
    return (
      <div>
    <NavbarT/>


<YMaps>
          <Map
            className={bog.map}
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }}
          >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map>
        </YMaps>

        <div className={bog.card1} tabindex="0">
  <span className={bog.card__infoicon}>
<CallIcon  style={{color:'red',opacity:'0.7'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>

<div className={bog.card2} tabindex="0">
  <span className={bog.card__infoicon}>
<TelegramIcon  style={{color:'white'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>



<div className={bog.card3} tabindex="0">
  <span className={bog.card__infoicon}>
  <FacebookIcon/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>


<div className={bog.card4} tabindex="0">
  <span className={bog.card__infoicon}>
<YouTubeIcon style={{color:'red',opacity:'0.7'}}/>
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>
<div className={bog.card5} tabindex="0">
  <span className={bog.card__infoicon}>
<InstagramIcon style={{color:'rgb(195, 11, 103)'}} />
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>


<div className={bog.card6} tabindex="0">
  <span className={bog.card__infoicon}>
<MailIcon />
  </span><div className={style.aloqa}>
  <h1 className={bog.card__title}>This is a title</h1>
  <p className={bog.card__description}>Lorem ipsum dolor sit amet and this is all the lorem ipsum text I remember</p>
  
  <p className={bog.card__credits}>Thanks <a className={bog.card__reference} >Gary Simon</a> for the inspiration</p>
  </div>
</div>
<Footer/>
</div>
    )
  }
}
