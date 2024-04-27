import React from "react";
import classes from "./topbar.module.scss";
import logo from "../../assets/companylogo.png";
import person from "../../assets/person.svg";
import cart from "../../assets/cart1.svg";

function Topbar() {
  return (
    <nav className={classes.container}>
      <div>
        <img className={classes.img} src={logo} alt="company-logo" />
      </div>
      <div>
        <div className={classes.inputContainer}>
          <input placeholder="Search Here..." />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.account}>
          <img className={classes.icon} src={person} alt="icon" />
          <p>Account</p>
        </div>
        <div className={classes.account}>
          <img className={classes.icon} src={cart} alt="icon" />
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
