import React from "react";
import { PRODUCTS } from "../../../../src/Products";
import { Product } from "../shop/Product"
import "./Shop.css";


export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jagadesh Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};