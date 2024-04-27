import React from "react";
import classes from "./categories.module.scss";
import menuitems from "../../menulist.json";
import arrowup from "../../assets/arrowup.svg";
import arrowdown from "../../assets/arrowdown.svg";

function Categories() {
  return (
    <div className={classes.container}>
      <ul className={classes.menulistContainer}>
        {menuitems.map((menu) => {
          return (
            <li className={classes.list} key={menu.id}>
              <img src={menu.img} alt="category image" />
              <div>
                <div className={classes.text}>{menu.name}</div>
                <img
                  className={classes.arrow}
                  //   src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-up-arrow-icon-png-image_956434.jpg"
                  alt="icom"
                  src={arrowdown}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
