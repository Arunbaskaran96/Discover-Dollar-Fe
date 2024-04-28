import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Offers from "../../components/offers/Offers";

function Home() {
  return (
    <div>
      <Topbar />
      <Categories />
      <Slider />
      <Offers />
    </div>
  );
}

export default Home;
