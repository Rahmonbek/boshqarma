import React, { Component } from 'react'
import './footer.css'
import gerb from '../img/gerb.png'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer id="dk-footer" className="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <a href="index.html" className="footer-logo">
                            <img style={{width:"70%", marginLeft:'15%', height:'auto'}} src={gerb} alt="footer_logo" className="img-fluid"/>
                        </a>
                       
                        <div className="footer-social-link">
                        <br/>
                            <h3>Ijtimoiy tarmoqlarimizga obuna bo'ling:</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                   
                    <div className="footer-awarad">
                        <img src="images/icon/best.png" alt=""/>
                       
                    </div>
                </div>
               
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                    <i className="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                               
                                <div className="contact-info">
                                    <h3>Jizzax viloyati Jizzax shahri</h3>
                                    <p>Ortiqho'jayev ko'chasi 5 - uy</p>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                        <div className="col-md-6">
                            <div className="contact-us contact-us-last">
                                <div className="contact-icon">
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                               
                                <div className="contact-info">
                                    <h3>+998 95 711 95 53</h3>
                                    <p>Bizga qo'ng'iroq qiling</p>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                    </div>
                   
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Foydali sahifalar</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Bosh sahifa</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Yangiliklar</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Tumanlar</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Ma'muriyat</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Bog'lanish</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Foto lavhalar</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{color:'white'}}>Video lavhalar</a>
                                    </li>
                                    {/* <li>
                                        <a href="#" style={{color:'white'}}>Faq</a>
                                    </li> */}
                                </ul>
                            </div>
                           
                        </div>
                       
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>Bog'lanish</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <p style={{color:'white'}}>
                               Emailingizni yuborish orqali biz bilan bog'lanishingiz mumkin</p>
                                <form action="#">
                                    <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                                <i className="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                               
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </div>
               
            </div>
           
        </div>
       


        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span style={{color:'white', fontSize:'16px', letterSpacing:'1px'}}>Sayt muallifi : <a style={{color:'red', fontWeight:'bold'}} href="#">IT Tower firmasi <i className="fas fa-arrow-right"></i></a><a style={{color:'white'}} href="tel: +998930820372"> +998-93-082-03-72</a></span>
                    </div>
                   
                  
                   
                </div>
               
            </div>
           
        </div>
       
       
</footer>

            </div>
        )
    }
}
