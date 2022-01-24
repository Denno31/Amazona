import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  const truncateName = (name) => {
    return name.length > 26 ? name.substr(0, 26) + "..." : name;
  };
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{truncateName(product.name)}</h2>
        </Link>
        <div className="rows">
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Link to={`/seller/${product?.seller?._id}`}>
            {product?.seller?.seller?.name}
          </Link>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
