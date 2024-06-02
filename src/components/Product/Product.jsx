import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductContext/ProductState";

const categoryImageMap = {
  'Golf Clubs': "https://www.oneupgolf.com.ar/var/oneupgolf_com_ar/storage/images/biblioteca-virtual/historia/los-antiguos-palos-de-golf/1538-3-esl-AR/Los-antiguos-palos-de-golf.jpg",
  'Irons': "https://www.golfreportlatino.com/dev/wp-content/uploads/2012/03/plao-de-golf-hierros-titleist.jpg",
  'Fairway Woods': "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/05/consejos-madera-3-golf-sota-par.jpeg?resize=1536%2C657&ssl=1",
  'Drivers': "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/12/5-cosas-que-NUNCA-debes-hacer-con-el-DRIVER..jpeg",
  'Wedges': "https://acushnet.scene7.com/is/image/titleist/SM8-CLUBS-OVERVIEW-20200210?wid=600&qlt=75&resMode=sharp2",
  'Accesories': "https://img.fruugo.com/product/2/16/927817162_max.jpg",
  'Balls': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6lgHQNc1kK7P6qSmeCKwp0jrw_M0T_EkyQ&s"
};

const Product = () => {
  const { products, getProducts, addToCart } = useContext(ProductsContext);
  const [img, setImg] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const imageUrl = {};
    products.forEach((product) => {
      console.log("Processing product:", product); // Verificar los datos del producto
      const lastCategory = product.Categories[product.Categories.length - 1];
      console.log("Last category ID:", lastCategory); // Verificar el ID de la última categoría
      const imgUrl = categoryImageMap[lastCategory.name] || '';
      console.log("Image URL:", imgUrl); // Verificar la URL de la imagen
      imageUrl[product.id] = imgUrl;
    });
    setImg(imageUrl);
  }, [products]);
  const handleAddToCart = (product) => {
    addToCart(product);
  }
  const productList = products.map((product) => {
    return (
      <div className='product' key={product.id}>
        <h2>{product.name}</h2>
        <img src={img[product.id]} alt={product.name} className="product-image"/>
        <p>Categories: {product.Categories.map((category) => {
          return category.name
        })}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
      </div>
    )
  })
  console.log(img)
  return (
    <div>
      {productList}
    </div>
  );
};

export default Product;