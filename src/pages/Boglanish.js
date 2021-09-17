import React, { Component } from 'react'
import bog from '../css/Boglanish.module.css'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import Footer from './FooterA'
import NavbarT from './NavbarT'

export default class Boglanish extends Component {
  render() {
    return (
      <div>
    <NavbarT/>

<h1 style={{margin:'auto',textAlign:'center',marginTop:'150px',marginBottom:'50px'}}>Bizning manzilimiz</h1>

<YMaps>
   <div>
          <Map width='100%' height='50vh'
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }} >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map></div>
        </YMaps>
    
<Footer/>
</div>
    )
  }
}
