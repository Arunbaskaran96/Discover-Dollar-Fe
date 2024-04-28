import React from "react";
import classes from "./dropdown.module.scss";

function Dropdown({ item, handleMouseEnter, handleMouseLeave, showDropdown }) {
  return (
    <div className={classes.listContainer}>
      {!item.children && (
        <div
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <p className={`${classes.name}`}>{item.name}</p>
        </div>
      )}
      {item.children && (
        <div
          className={`${classes.title} ${classes.main}`}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <p
            className={`${classes.name} ${
              showDropdown[item.id] && classes.active
            }`}
          >
            {item.name}
          </p>
          {showDropdown[item.id] && (
            <div className={`${classes.subcategory} ${classes.subcate}`}>
              {showDropdown[item.id] &&
                item.children.map((menu) => {
                  return (
                    <Dropdown
                      key={menu.id}
                      item={menu}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                    />
                  );
                })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
