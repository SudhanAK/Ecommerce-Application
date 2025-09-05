import React, { useState, useEffect } from 'react';

function App() {
  const [search, Search] = useState('');
  const [result, Result] = useState(null);

  useEffect(() => {
    if (search==='') return;

    const fetchData = async () => {
      try {
        const res = await fetch( `https://real-time-product-search.p.rapidapi.com/search-light-v2?q=${search}&country=us&language=en&page=1&limit=10&sort_by=BEST_MATCH&product_condition=ANY&return_filters=false`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com',
            'x-rapidapi-key': 'ab9c91b8e9mshd04a9ad4ef16b80p1034cejsn69dc96d1a7c8'
          },
      
        });

        const data = await res.json();
        console.log(data);
        Result(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [search]);
  

  return (
    <div>
      <h2> Shopping Search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => Search(e.target.value)}
      />
      <p>Search: {search}</p>
      

      {result && (
        <pre style={{ textAlign: 'left' }}>
          {result.data.products.map((item,index)=>(
            <div class="box">
              <img src={item.product_photo} alt=""></img>
            </div>

          )) }   
           </pre>
      )}
    </div>
  );
}

export default App;
