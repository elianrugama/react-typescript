import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Tabla = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);
  

  return (
    
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {
        products.map((product: any) => (
            <div>
              <Link to={`/${product.id}`} key={product.id}>
              <img className="h-auto max-w-full rounded-lg" src={product.imagen} alt=""
              />
              </Link>
        
        </div>
        ))
            
    }
    
</div>

  );
};

export default Tabla;
