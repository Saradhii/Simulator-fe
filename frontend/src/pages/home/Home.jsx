import React from 'react'
import Fade from "react-reveal/Fade"

const Home = () => {
  return (
    <section className="slider-area home-four-slider">
      <div className="single-slider slider-bg slider-style-two">
        <div className="container custom-container-two">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="slider-content">
                  <Fade up delay={.4000}>
                  <h6>Simulation gaming</h6>
                  <br></br>
                  <br></br>
                  </Fade>
                  <Fade up delay={.4000}>
                  <h2>Win the game By Becoming a <span>Billionaire</span></h2>
                  </Fade>
                  <Fade up delay={.6000}>
                  <p>Outsmart your global rivals with your savvy asset management in this immersive simulation.</p>
                  </Fade>
                  <Fade up delay={.8000}>
                  <a href="/game" className="btn btn-style-two">PLAY</a>
                  </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Home