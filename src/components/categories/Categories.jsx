import React, { useState } from "react";
import classes from "./categories.module.scss";
import menuitems from "../../menulist.json";
import Dropdown from "../dropdown/Dropdown";

function Categories() {
  const [showDropdown, setShowDropdoun] = useState([]);

  const handleMouseEnter = (id) => {
    setShowDropdoun((prev) => {
      let arr = [...prev];
      arr[id] = true;
      return arr;
    });
  };

  const handleMouseLeave = (id) => {
    setShowDropdoun((prev) => {
      let arr = [...prev];
      arr[id] = false;
      return arr;
    });
  };

  return (
    <div className={classes.categoryContainer}>
      <ul className={classes.lists}>
        {menuitems.map((menu) => {
          if (!menu.children) {
            return (
              <li className={classes.list} key={menu.id}>
                <img src={menu.img} alt="category image" />
                <div>
                  <div style={{ textAlign: "center" }} className={classes.text}>
                    {menu.name}
                  </div>
                </div>
              </li>
            );
          }
          return (
            <li
              className={`${classes.list} ${classes.listhover}`}
              key={menu.id}
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={() => handleMouseLeave(menu.id)}
            >
              <div
                className={` ${classes.categoryBox} ${
                  showDropdown[menu.id] && classes.active
                }`}
              >
                <img src={menu.img} alt="category image" />
                <div className={`${classes.title}`}>
                  <div className={classes.text}>{menu.name}</div>
                  {showDropdown[menu.id] ? <p>⬆</p> : <p>⬇</p>}
                </div>
              </div>
              {showDropdown[menu.id] && (
                <div
                  className={`${classes.submenu} ${classes.submenuanimation}`}
                >
                  {showDropdown[menu.id] &&
                    menu.children.map((item) => {
                      return (
                        <Dropdown
                          key={item.id}
                          item={item}
                          handleMouseEnter={handleMouseEnter}
                          handleMouseLeave={handleMouseLeave}
                          showDropdown={showDropdown}
                        />
                      );
                    })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
