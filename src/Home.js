import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBagShopping,
  faAngleDown,
  faBars,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const images = [
    'billboard.jpg',
    'billboard1.jpg',
    'billboard2.jpg',
    'billboard3.jpg',
    'billboard4.jpg',
    'billboard5.jpg',
  ];

  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [hideBanner, setHideBanner] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menu, setMenu] = useState(null); // ✅ Corrected state
  const navigate = useNavigate();

  const categories = [
    'Electronics',
    'Fashion',
    'Clothing',
    'Beauty',
    'Home',
    'Sports',
    'Pets',
    'Grocery',
    'Books',
    'Toys',
  ];

  useEffect(() => {
    if (hideBanner) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [hideBanner]);

  const handleSearch = async (query = search) => {
    if (!query.trim()) return;
    setHideBanner(true);
    try {
      const res = await fetch(
        `https://real-time-product-search.p.rapidapi.com/search-light-v2?q=${query}&country=us&language=en&page=1&limit=10&sort_by=BEST_MATCH&product_condition=ANY&return_filters=false`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com',
            'x-rapidapi-key': '6f6c5f1253msh3a46b552c0e6720p144160jsnaea6e57d87bd',
          },
        }
      );
      const data = await res.json();
      setResult(data?.data?.products ? data : null);
    } catch (error) {
      console.error('Search Error:', error);
    }
  };

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await fetch(
          'https://real-time-product-search.p.rapidapi.com/search-light-v2?q=shoes&country=us&language=en&page=1&limit=10&product_condition=NEW&return_filters=false',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com',
              'x-rapidapi-key': '6f6c5f1253msh3a46b552c0e6720p144160jsnaea6e57d87bd',
            },
          }
        );
        const data = await res.json();
        if (data?.data?.products) {
          setTopProducts(data.data.products);
        } else {
          console.warn('No top products returned.');
        }
      } catch (err) {
        console.error('Top products fetch error:', err);
      }
    };

    const timer = setTimeout(fetchTopProducts, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="homepage">
      <div className="navbar fixed">
        <img src="logo.png" alt="Logo" className="logo" />
        <p className="lang">EN</p>

        <div
          className="category-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{ position: 'relative' }}
        >
          <button className="category-button">
            All Categories <FontAwesomeIcon icon={faAngleDown} />
          </button>

          {showDropdown && (
            <div
              className="dropdown-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#fff',
                border: '1px solid #ccc',
                padding: '10px',
                zIndex: 99999,
                width: '180px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="dropdown-item"
                  onClick={() => {
                    handleSearch(cat);
                    setShowDropdown(false);
                  }}
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    borderBottom:
                      i !== categories.length - 1 ? '1px solid #eee' : 'none',
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{
            marginLeft: '-110px',
            border: '1px solid lightgrey',
            borderRadius: '5px',
          }}
          className="search-btn"
          onClick={() => handleSearch()}
        >
          <p>SEARCH</p>
        </button>

        {/* 🔽 Fixed Nav Icons with Dropdowns */}
        <div
          className="nav-icons"
          style={{ marginLeft: '20px', position: 'relative' }}
        >
          <div
            style={{ display: 'inline-block', margin: '0 10px', cursor: 'pointer' }}
            onClick={() => setMenu(menu === 'bell' ? null : 'bell')}
          >
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div
            style={{ display: 'inline-block', margin: '0 10px', cursor: 'pointer' }}
            onClick={() => setMenu(menu === 'heart' ? null : 'heart')}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div
            style={{ display: 'inline-block', margin: '0 10px', cursor: 'pointer' }}
            onClick={() => setMenu(menu === 'bag' ? null : 'bag')}
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div
            style={{ display: 'inline-block', margin: '0 10px', cursor: 'pointer' }}
            onClick={() => setMenu(menu === 'profile' ? null : 'profile')}
          >
            <img src="profile.png" alt="Profile" className="profile-icon" />
          </div>

          {menu && (
            <div
              style={{
                fontSize: '14px',  
                position: 'absolute',
                top: '40px',
                right: 0,
                background: '#fff',
                border: '1px solid #ccc',
                padding: '10px',
                width: '200px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                borderRadius: '5px',
                zIndex: 1000,
              }}
            >
              {menu === 'bell' && <p>No new notifications</p>}
              {menu === 'heart' && <p>Your wishlist is empty</p>}
              {menu === 'bag' && <p>Your cart is empty</p>}
              {menu === 'profile' && (
                <div>
                  <p><b>Profile</b></p>
                  <p>My Account</p>
                  <p>Settings</p>
                  <p>Logout</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

       <div className="sidebar fixed">
        <button className="active">
          <FontAwesomeIcon icon={faBars} /> Categories
        </button>
        <button
          type="button"
          className="passive"
          onClick={() => {
            console.log('Navigating to Best Offers');
            navigate('/best-offers');
          }}
        >
          Best Offers
        </button>
        <button className="passive">Sell with Us</button>
        <button className="passive" onClick={() => navigate('/track-order')}>
          Track Order
        </button>
        <button className="passive" onClick={() => navigate('/blog')}>
          Blog
        </button>
        <div className="media">
          <button className="passive">Account</button>
          <button className="passive" onClick={() => navigate('/Settings')}>
            <FontAwesomeIcon icon={faCog} /> Settings
          </button>
        </div>
      </div>

      {!hideBanner && (
        <div className="banners">
          <img src={images[index]} alt="Rotating Banner" className="banner1" />
          <img src="sidebanner.png" alt="Sidebar Banner" className="banner2" />
        </div>
      )}

{result && (
  <div
    style={{
      marginLeft: '180px',
      marginTop: '120px',  
      padding: '20px',
       
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}
    >
      {result.data.products.map((item, i) => (
        <div
          key={i}
          style={{
            border: '2px solid lightgrey',
            borderRadius: '20px',
            padding: '15px',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={item.product_photo}
            alt=""
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '10px',
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600' }}>
              {item.product_title}
            </h2>
            <p>Product Price: {item.price}</p>
            <p>Original Price: {item.original_price}</p>
            <p>Discount: {item.discount_percent || 'N/A'}</p>
            <p>Rating: {item.product_rating}</p>
            <p>Reviews: {item.product_num_reviews}</p>
            <p>Shipping: {item.shipping}</p>
            <div style={{ marginTop: '10px' }}>
              <button
                type="button"
                className="cartbtn"
                style={{ marginRight: '10px' }}
              >
                Add To CART
              </button>
              <button type="button" className="buybtn">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


      <br />
      <br />
      <div className="top-products">
        <div className="section-header">
          <h2>
            Top <span>Products</span>
          </h2>
        </div>

        <div className="product-grid">
          {topProducts.length > 0 ? (
            topProducts.map((item, i) => (
              <div key={i} className="product-card">
                <img
                  src={item.product_photo}
                  alt={item.product_title}
                  style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                />
                <h4>{item.product_title}</h4>
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                  {item.price || 'Price N/A'}
                </p>
                <button className="cartbtn" style={{ marginRight: '5px' }}>
                  Add to Cart
                </button>
                <button className="buybtn">Buy Now</button>
              </div>
            ))
          ) : (
            <p>Loading top products...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
