import React from "react";
import Banner from "../components/Banner";
import BestSellerBook from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
    </>
  );
};

export default Home;
