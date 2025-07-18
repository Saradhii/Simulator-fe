import React from 'react'
import Slider from "react-slick";
import { useEffect, useState } from 'react'

const ShopArea = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 12;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  // Pagination logic
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="shop-area home-four-shop-area pt-115 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title home-four-title text-center mb-35">
              <h2>crypto <span>market place</span></h2>
              <p>Buy and sell crypto currencies with ease</p>
            </div>
            {/* Search Input */}
            <div className="mb-4 d-flex justify-content-center">
              <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Search by name or symbol..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{ paddingLeft: 40 }}
                />
                <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }}>
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <div className="text-center my-5">
            <span>Loading...</span>
          </div>
        )}
        {error && (
          <div className="text-center my-5 text-danger">
            <span>{error}</span>
          </div>
        )}
        <div className="row">
          {currentCoins && currentCoins.map((coin) => (
            <div key={coin.id} className="col-xl-3 col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
              <div className="shop-item w-100" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.07)', borderRadius: '12px', background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{padding: "10px"}}>
                  <img style={{ width: "50px", height: "50px", margin: "auto", marginBottom: "20px", marginTop: "20px" }} src={coin.image} alt={coin.name} />
                </div>
                <div className="product-content text-center">
                  <div className="product-tag"><a href="/#">{coin.symbol.toUpperCase()}</a></div>
                  <h4 style={{color: "#1c1121", fontFamily: "Poppins, sans-serif"}}>{coin.name}</h4>
                  <div style={{display: "flex", gap: "20px", justifyContent: "space-around", alignItems: "center", width: "100%", padding: "10px"}}>
                    <div className="product-price">
                      <h5 style={{margin: 0}}>${coin.current_price.toLocaleString()}</h5>
                    </div>
                    <div className="product-cart-action">
                      <button style={{backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer"}}>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                  <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>&laquo;</button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i + 1} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                  </li>
                ))}
                <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                  <button className="page-link" onClick={nextPage} disabled={currentPage === totalPages}>&raquo;</button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </section>
  )
}

export default ShopArea