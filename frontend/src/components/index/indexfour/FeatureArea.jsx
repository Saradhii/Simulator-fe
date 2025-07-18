import React from 'react'
import Slider from "react-slick";

const FeatureArea = () => {

  return (
    <section className="featured-game-area new-released-game-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="section-title home-four-title black-title text-center mb-60">
                <h2>ALL NEW <span>MARKET PLACE</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-full row no-gutters new-released-game-active">
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb01.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/crypto">INVEST IN <span>Crypto</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-coins" />
                    <span>Invest in the Future of Money</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/crypto">BUY<span>CRYPTO</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-coins" />
                    <span>Invest in the Future of Money</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb02.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">INVEST IN <span>Real Estate</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-building" />
                    <span>Build Wealth, One Property at a Time</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">BUY <span>Real Estate</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-building" />
                    <span>Build Wealth, One Property at a Time</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb03.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">INVEST IN <span>Stock Market</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-chart-line" />
                    <span>Invest in stock market</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">BUY <span>STOCKS</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-chart-line" />
                    <span>Own a Piece of the World’s Biggest Companies</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="featured-game-item mb-30">
                <div className="featured-game-thumb">
                  <img src="assets/img/images/s_featured_game_thumb04.jpg" alt="" />
                </div>
                <div className="featured-game-content">
                  <h4><a href="/#">OWN <span>Collectibles</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-gem" />
                    <span>Own Collectibles</span>
                  </div>
                </div>
                <div className="featured-game-content featured-game-overlay-content">
                  <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                  <h4><a href="/#">BUY <span>Collectibles</span></a></h4>
                  <div className="featured-game-meta">
                    <i className="fas fa-gem" />
                    <span>Own Collectibles</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
  )
}

export default FeatureArea