import React from "react";
import classes from "./slider.module.scss";

function Slider() {
  return (
    <div>
      <swiper-container>
        <swiper-slide>
          <img
            className={classes.image}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/MayART24/ACQ/GW/New_MayART24_GW_PC_Hero._CB559897147_.jpg"
            alt="imag"
          />
        </swiper-slide>
        <swiper-slide>
          <div className={classes.slideContainer}>
            <img
              className={classes.image}
              src="https://img.freepik.com/premium-photo/portrait-photo-man-holding-cellphone-countryside_529197-692.jpg"
              alt="imag"
            />
            <div className={classes.content}>
              <h6>Launch Soon</h6>
              <p>Mark the date on your calendar</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Slider;
