import React from 'react'
import Fade from  "react-reveal/Fade";
import Slide from  "react-reveal/Slide";
import Slider from "react-slick";

const SliderArea = () => {


    const settings={
        dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
                    autoplay: true,
                    arrows:false,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
		]
    }

  return (
    <section className="home-seven-slider">
    <Slider className="h-seven-slider-active" {...settings}>
      <div className="h-seven-slider-item">
        <div className="container custom-container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-content">
                  <Fade up delay={.2000}>
                <h2 className="title">streamer's Net worth <br /> <strong><span>$490 Million</span></strong></h2>
                </Fade>
                <Fade up delay={.4000}>
                <p >Billionnaire status is within your grasp! Keep playing and build your empire.</p>
                </Fade>
               <Fade up delay={.6000}>
               <a href="/account" className="btn rotated-btn">account</a>
               </Fade>
              </div>
              
                
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-img text-center">
                  <Slide right delay={.4000}>
                  {/* <img src="assets/img/slider/shop_slider_img01.png" alt="" /> */}
                  </Slide>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-seven-slider-item">
        <div className="container custom-container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-content">
               <Fade up dealy={.2000}>
               <h2 className="title">streamer's Net worth <br /> <strong><span>$490 Million</span></strong></h2>
               </Fade>
               <Fade up delay={.4000}>
               <p>Billionaire dreams await! Keep playing and see how far you can go.</p>
               </Fade>
              
                <Fade up delay={.6000}>
                <a href="/account" className="btn rotated-btn">account</a>
                </Fade>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-img text-center">
              <Slide right delay={.4000}>
              {/* <img src="assets/img/slider/shop_slider_img02.png" alt="" /> */}
              </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-seven-slider-item">
        <div className="container custom-container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-content">
                <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".2">streamer's Net worth<br /> <strong><span>$490 Million</span></strong></h2>
                <p data-animation-in="fadeInUp" data-delay-in=".4">The road to riches begins here! Keep playing and amass your fortune.</p>
                <a href="/account" className="btn rotated-btn" data-animation-in="fadeInUp" data-delay-in=".6">account</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="h-seven-slider-img text-center">
                {/* <img src="assets/img/slider/shop_slider_img03.png" data-animation-in="slideInRightS" data-delay-in=".4" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </section>
  )
}

export default SliderArea