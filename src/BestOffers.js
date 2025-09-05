import React from 'react';

const BestOffers = () => {
  const products = [
    {
      product_title: 'Wireless Headphones',
      product_photo: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww',
      price: '$59.99',
      original_price: '$89.99',
      discount_percent: '33%',
      product_rating: '4.5',
      product_num_reviews: '324',
      shipping: 'Free Shipping',
    },
    {
      product_title: 'Smart Watch',
      product_photo: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$99.99',
      original_price: '$149.99',
      discount_percent: '34%',
      product_rating: '4.2',
      product_num_reviews: '210',
      shipping: 'Free Shipping',
    },
    {
      product_title: 'Running Shoes',
      product_photo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$45.00',
      original_price: '$70.00',
      discount_percent: '36%',
      product_rating: '4.6',
      product_num_reviews: '180',
      shipping: 'Standard Shipping',
    },
    {
      product_title: 'Backpack',
      product_photo: 'https://plus.unsplash.com/premium_photo-1664392214882-7cecd0a67ccd?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$39.99',
      original_price: '$60.00',
      discount_percent: '33%',
      product_rating: '4.4',
      product_num_reviews: '150',
      shipping: 'Free Shipping',
    },
  ];

  return (
    <div style={{ padding: '30px', marginLeft: '260px', marginTop: '120px' }}>
      <h2 style={{ marginBottom: '30px', color: '#d6002f' }}>Best Offers</h2>
      {products.map((item, i) => (
        <div
          key={i}
          style={{
            border: '1px solid lightgrey',
            borderRadius: '15px',
            padding: '15px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            backgroundColor: '#fff',
            width: '800px',
          }}
        >
          <img
            src={item.product_photo}
            alt={item.product_title}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <div>
            <h3 style={{ marginBottom: '10px', fontSize: '20px' }}>{item.product_title}</h3>
            <p>Product Price: {item.price}</p>
            <p>Original Price: {item.original_price}</p>
            <p>Discount: {item.discount_percent || 'N/A'}</p>
            <p>Rating: {item.product_rating}</p>
            <p>Reviews: {item.product_num_reviews}</p>
            <p>Shipping: {item.shipping}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestOffers;
