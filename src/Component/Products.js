import React from "react";
import { data } from "./db";
import { Link } from "react-router-dom";
import "../css/products.css";

export default function Products() {
  return (
    <div className="products">
      <div className="container">
        <h1 className="products-title">trending products</h1>
        <div className="row">
          {data.map((product) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                <div className="card">
                  <div className="img-body">
                    <span className="state">{product.state}</span>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <Link to={`/product/${product.id}`} className="shop-btn">
                      Quick Shop
                    </Link>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 20)}...
                    </h5>
                    <span className="card-price">${product.price}.00</span>
                    <span className="in-stock d-block">
                      in stock {product.inStock} items
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
