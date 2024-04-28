import React from "react";
import classes from "./suggestion.module.scss";

function Suggestion({ items, clickHandler }) {
  return (
    <div className={classes.container}>
      <ul className={classes.searchLists}>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <li
                onClick={() => clickHandler(item)}
                className={classes.searchList}
              >
                {item}
              </li>
            );
          })
        ) : (
          <li className={classes.noResult}>Sorry...No Result Found</li>
        )}
      </ul>
    </div>
  );
}

export default Suggestion;
