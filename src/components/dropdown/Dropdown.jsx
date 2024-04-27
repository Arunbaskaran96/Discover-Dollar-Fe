import React from "react";
import classes from "./dropdown.module.scss";

function Dropdown({ item, handleMouseEnter, handleMouseLeave, showDropdown }) {
  //   console.log(showDropdown);
  return (
    <div className={classes.listContainer}>
      {!item.children && <p className={classes.sublist}>{item.name}</p>}
      {item.children && (
        <div className={classes.main}>
          <p
            className={classes.title}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            {item.name}
            {showDropdown[item.id] && (
              <div className={classes.subcategory}>
                {showDropdown[item.id] &&
                  item.children.map((menu) => {
                    return (
                      // <p className={classes.sublist}>{menu.name}</p>
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
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
