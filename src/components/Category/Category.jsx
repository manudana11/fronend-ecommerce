import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductsContext } from '../../context/ProductContext/ProductState';

const Category = ({categoryId, categoryName}) => {
    const { categoryById, getProductsByCategory} = useContext(CategoryContext);
    const { addToCart } = useContext(ProductsContext);

    useEffect(() => {
      getProductsByCategory(categoryId);
    }, [categoryId]);
    
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
      <h1>{categoryName}</h1>
      {productList.length > 0 ? (
        <div>{productList}</div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  )
}

export default Category