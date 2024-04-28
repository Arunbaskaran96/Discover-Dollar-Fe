import React from "react";
import classes from "./offers.module.scss";

function Offers() {
  const products = [
    {
      img: "https://m.media-amazon.com/images/I/4105IiC5tDL._SX300_SY300_QL70_FMwebp_.jpg",
      name: "iQOO Z6 Lite 5G ",
      offer: "-40%",
      old: "19,999",
      new: "11,999",
    },
    {
      img: "https://m.media-amazon.com/images/I/71k3gOik46L._SX679_.jpg",
      name: "iQOO Z7s 5G",
      offer: "-38%",
      old: "23,999",
      new: "15,999",
    },
    {
      img: "https://m.media-amazon.com/images/I/71JRRh-Bx7L._SY625_.jpg",
      name: "ASIAN Men's Tarzan-11",
      offer: "-25%",
      old: "999",
      new: "749",
    },
    {
      img: "https://m.media-amazon.com/images/I/618I++aMUNL._SX679_.jpg",
      name: "Round Neck Oversized",
      offer: "-80%",
      old: "3,999",
      new: "799",
    },
  ];
  return (
    <div className={classes.container}>
      <h4>Today's Deals</h4>
      <div className={classes.productsContainer}>
        {products.map((product, index) => {
          return (
            <div className={classes.productContainer} key={index}>
              <div>
                <img
                  className={classes.img}
                  src={product.img}
                  alt="prod-image"
                />
              </div>
              <div>
                <h5>{product.name}</h5>
                <div className={classes.priceContainer}>
                  <p className={classes.offer}>{product.offer}</p>
                  <p className={classes.newprice}>
                    New Price : ₹ {product.new}
                  </p>
                </div>
                <p className={classes.oldPrice}>
                  <del>Old Price : ₹ {product.old}</del>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offers;
