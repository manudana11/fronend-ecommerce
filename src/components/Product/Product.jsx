import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductContext/ProductState";

const accesKey = 'OxnNY0rfmFFdG67-dowRq1lxI8n5QSlYUqAF7ZfrRc8';
const getImgFromApi = async (query) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accesKey}`);
  const data = await response.json();
  return data.results.length > 0 ? data.results[0].urls.small : '';
}

const Product = () => {
    const { products, getProducts, addToCart } = useContext(ProductsContext);
    const [img, setImg] = useState({});
    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        const fetchImg = async () => {
        const newImg = {};
        for (const product of products) {
            const imgUrl = await getImgFromApi(product.name);
            newImg[product.id] = imgUrl;
        }
        setImg(newImg);
        };
        fetchImg();
    }, [products]);
        const handleAddToCart = (product) => {
            addToCart(product);
        }
    const productList = products.map((product) => {
        return (
          <div className='product' key={product.id}>
            <h2>{product.name}</h2>
            <img src={img[product.id]} alt={product.name} />
            <p>Categories: {product.Categories.map((category) => {
              return category.name
            })}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        )
      })
    return (
        <div>
            {productList}
        </div>
    );
};

export default Product;