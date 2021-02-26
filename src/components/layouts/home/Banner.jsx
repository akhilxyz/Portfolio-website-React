import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <div className="section slide-personal-Intro-first">
        <section className="banner-section s1" id="home">
          <div className="container">
            <div className="content-text position-relative">
              <div
                className="animate-element wow delay5 fadeInDown"
                data-wow-delay="0.3s"
              >
                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                  <span>I'm&nbsp;</span>
                  <span className="cd-words-wrapper color-d4">
                    <b className="is-visible">Akhil</b>
                    <b>Developer</b>
                    <b>Designer</b>
                  </span>
                </h1>
                <p className="lt-sp03 mg-b60 text-white">
                  Hi, I’m Akhil. Nice to meet you.
                  <br />
                  Since beginning my journey as a Developer nearly 4 years ago,
                  I've done remote work for agencies,
                  <br />
                  consulted for startups, and collaborated with talented people
                  to create digital products for both business
                  <br /> and consumer use. I'm quietly confident, naturally
                  curious, and perpetually working on improving my skills
                </p>
              </div>
              <div
                className="animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="fl-btn btn-general btn-hv-border">
                  <Link
                    to="#"
                    className="border-corner5 f-w500 lt-sp095 text-white "
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
