import React from "react";
import classes from "./slider.module.scss";

function Slider() {
  return (
    <div>
      <swiper-container>
        <swiper-slide>
          <img
            className={classes.image}
            src="https://e-commerce-pied-xi.vercel.app/_next/image?url=%2Fimages%2Fhome%2Fbanner.webp&w=1920&q=75"
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
