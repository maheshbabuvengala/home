import React from "react";
import banner from "./Banner.module.css";
import bannerimg from "../assets/banner12.png";
import "bootstrap/dist/css/bootstrap.css";

const Banner = () => {
  return (
    <div className={banner.banner}>
      <div className={banner.bannerL}>
        <h3 className={banner.text}>
          <span className="h3">
            Unlock the potential of your institution with
          </span>
          <span className="h1 text-danger"> world-class educators.</span> <br />{" "}
          <span className="h3">Your journey to excellence begins here.</span>
        </h3>
      </div>
      <div className={banner.bannerR}>
        <img src={bannerimg} alt="" className="img" />
      </div>
    </div>
  );
};

export default Banner;
