import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductsContext } from '../../context/ProductContext/ProductState';
import './Category.scss'

const categoryImageMap = {
  1: "https://www.oneupgolf.com.ar/var/oneupgolf_com_ar/storage/images/biblioteca-virtual/historia/los-antiguos-palos-de-golf/1538-3-esl-AR/Los-antiguos-palos-de-golf.jpg",
  2: "https://www.golfreportlatino.com/dev/wp-content/uploads/2012/03/plao-de-golf-hierros-titleist.jpg",
  3: "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/05/consejos-madera-3-golf-sota-par.jpeg?resize=1536%2C657&ssl=1",
  4: "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/12/5-cosas-que-NUNCA-debes-hacer-con-el-DRIVER..jpeg",
  5: "https://acushnet.scene7.com/is/image/titleist/SM8-CLUBS-OVERVIEW-20200210?wid=600&qlt=75&resMode=sharp2",
  6: "https://img.fruugo.com/product/2/16/927817162_max.jpg",
  7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6lgHQNc1kK7P6qSmeCKwp0jrw_M0T_EkyQ&s"
};

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
          <img src={categoryImageMap[categoryId]} alt={product.name} className='product-image' />
          <h2>{product.name}</h2>
          <p>Brand: {product.brand}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      )
    })

  return (
    <div>
      <h1>{categoryName}</h1>
      {productList.length > 0 ? (
        <div className='products-container'>{productList}</div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  )
}

export default Category