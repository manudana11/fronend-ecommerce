import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductsContext } from '../../context/ProductContext/ProductState';

const GolfClubs = () => {
    const { categoryById, getProductsByCategory} = useContext(CategoryContext);
    const { addToCart } = useContext(ProductsContext);

    useEffect(() => {
      getProductsByCategory(1);
    }, []);
    
    console.log('products by cat', categoryById);
    const handleAddToCart = (product) => {
      addToCart(product);
    }
    const productList = categoryById.map((product, i) => {
      return (
        <div className='product' key={i}>
          <h2>{product.name}</h2>

          <p>Brand: {product.brand}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      )
    })

  return (
    <div>
      <h1>Golf Clubs</h1>
      {productList.length > 0 ? (
        <div>{productList}</div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  )
}

export default GolfClubs