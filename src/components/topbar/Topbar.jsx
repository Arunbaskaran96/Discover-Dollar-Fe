import React, { useEffect, useState } from "react";
import classes from "./topbar.module.scss";
import logo from "../../assets/companylogo.png";
import person from "../../assets/person.svg";
import cart from "../../assets/cart1.svg";
import menuitems from "../../menulist.json";
import arrayFlatern from "../../utils/arrayFlat";
import Suggestion from "../suggestion/Suggestion";

function Topbar() {
  const menuItems = arrayFlatern(menuitems);
  const [serachTerm, setSearchTerm] = useState("");
  const [searchQueryResult, setSearchQueryResult] = useState([]);

  const clickHandler = (item) => {
    alert(`you have searched ${item}`);
    setSearchTerm("");
    setSearchQueryResult([]);
  };

  useEffect(() => {
    const result = menuItems.filter((item) =>
      item.toLowerCase().includes(serachTerm.toLowerCase())
    );
    setSearchQueryResult(result);
  }, [serachTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <nav className={classes.container}>
      <div>
        <img className={classes.img} src={logo} alt="company-logo" />
      </div>
      <div>
        <div className={classes.autocomplete}>
          <div className={classes.inputContainer}>
            <input onChange={handleChange} placeholder="Search Here..." />
          </div>
          {serachTerm && (
            <Suggestion items={searchQueryResult} clickHandler={clickHandler} />
          )}
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
