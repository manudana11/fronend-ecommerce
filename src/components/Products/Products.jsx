import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductContext/ProductState'

const Products = () => {
    const {products, getProducts} = useContext(ProductsContext);
    useEffect(() => {
        getProducts();
    }, []);
    const productList = products.map((product) => {
      return (
        <div className='product' key={product._id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
        </div>
      )
    })
  return (
    <>
    {productList}
    </>
  )
}

export default Products