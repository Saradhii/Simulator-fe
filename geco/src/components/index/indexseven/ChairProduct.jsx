import React, { useEffect } from 'react'
import axios from 'axios';

const ChairProduct = () => {
  const getaccountDetails = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
  
      if (!token) {
        console.log('Token not found in local storage');
        return;
      }
  
      const reqOptions = {
        url: 'https://rich-teal-spider-tux.cyclic.app/z1/userdetails',
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}` // Attach token in the Authorization header
        }
      };
  
      const response = await axios.request(reqOptions);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching account details:', error);
    }
  }; 
  useEffect(() => {
    getaccountDetails();
  }, []);
  return (
    <section className="chair-product-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="game-shop-title text-center mb-65">
            <h2 className="title">Your Account</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair01.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">Accessories</span>
                  <h5 className="title"><a href="/#">STEEL FRAME CHAIR</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$49.00</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair02.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">gaming chair</span>
                  <h5 className="title"><a href="/#">DELUX DC-R103</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$29.00</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair03.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">Accessories</span>
                  <h5 className="title"><a href="/#">Antonob DT-R7</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$29.00</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair04.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">gaming chair</span>
                  <h5 className="title"><a href="/#">Antonob DT-R7</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$29.00</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair05.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">gaming chair</span>
                  <h5 className="title"><a href="/#">Antonob DT-R7</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$29.00</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="chair-product-item mb-60">
            <div className="chair-product-thumb">
              <img src="assets/img/product/gaming_chair06.jpg" alt="" />
              <a href="/#" className="cart">Add to cart <i className="fas fa-shopping-basket" /></a>
            </div>
            <div className="chair-product-content">
              <div className="chair-product-top-content">
                <div className="main-content">
                  <span className="category">Player Name</span>
                  <h5 className="title"><a href="/#">Antonob DT-R7</a></h5>
                </div>
                <div className="chair-product-price">
                  <h5 className="price">$29.00 M</h5>
                </div>
              </div>
              <div className="chair-product-bottom">
                <div className="rating">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <a href="/#" className="heart"><i className="far fa-heart" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ChairProduct