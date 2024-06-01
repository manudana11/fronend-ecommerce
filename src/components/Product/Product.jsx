import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductContext/ProductState";

const categoryImageMap = {
  1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.catawiki.com%2Fes%2Fl%2F37961127-antiguos-palos-de-golf-de-principios-del-siglo-xx-4-madera-principios-del-siglo-xx&psig=AOvVaw02PHzGGt3WhsFpem4rfHl1&ust=1717348464882000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDyy4X0uoYDFQAAAAAdAAAAABAE",
  2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.golfreportlatino.com%2Fdev%2F%3Fp%3D25144&psig=AOvVaw2DuJGeWDTJl3kZtXJpyZap&ust=1717348588036000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiRs8v0uoYDFQAAAAAdAAAAABAE",
  3: "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/05/consejos-madera-3-golf-sota-par.jpeg?resize=1536%2C657&ssl=1",
  4: "https://i0.wp.com/sotapar.com/wp-content/uploads/2021/12/5-cosas-que-NUNCA-debes-hacer-con-el-DRIVER..jpeg",
  5: "https://acushnet.scene7.com/is/image/titleist/SM8-CLUBS-OVERVIEW-20200210?wid=600&qlt=75&resMode=sharp2",
  6: "https://img.fruugo.com/product/2/16/927817162_max.jpg",
  7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6lgHQNc1kK7P6qSmeCKwp0jrw_M0T_EkyQ&s"
};

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
        if (product.Categories.length > 0) {
          const lastCategory = product.Categories[product.Categories.length -1].id;
          const imgUrl = categoryImageMap[lastCategory] || '';
          newImg[product.id] = imgUrl;
        }
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