import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (          
            <div className="section slide-personal-Intro-sixth slide-dark" id="contact">                
                <footer id="footer" className="footer footer-s1 footer-s1-home1">
                    <div id="footer-widget" className="footer-widget-s1 footer-widget-line bg-s1 position-relative">
                    <div className="container">
                        <div className="row d-lg-flex align-items-center text-center">
                        <div className="col-lg-12">
                            <h3 className="widget-title larger lt-sp06">Stay Connected</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="widget-info">
                            <p className="address">Chandigarh, India</p>
                            <p className="mail" style={{fontSize:"28px"}}>akhilchoudharyxyz@gmail.com</p>
                            <p className="phone">+91 827 881 5527</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="site-list site-list-pdl text-center">
                            <a target="_blank" href="https://twitter.com/itsyourboyakhil" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></a>
                            <a target="_blank" href="https://twitter.com/itsyourboyakhil" className="bg-s2"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            <a target="_blank" href="https://twitter.com/itsyourboyakhil" className="bg-s3"><span className="fa fa-instagram" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="bottom" className="bottom-s1">
                    <div className="container d-lg-flex justify-content-between">
                        <div className="copyright lt-sp02">
                        © Akhil Choudhary, 2020 All rights reserved.
                        </div>
                        <div className="socials-list color-s1">
                        <a  target="_blank" href="https://www.facebook.com/Itsyourboyakhil/" ><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a target="_blank" href="https://twitter.com/itsyourboyakhil"  ><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a target="_blank" href="https://www.instagram.com/akhilchoudharry/" ><i className="fa fa-instagram" aria-hidden="true" /></a>
                        </div>
                    </div>
                    </div>
                </footer>             
            </div>
        );
    }
}

export default Footer;
