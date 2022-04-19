import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <span className="title">Click a button below</span>
      <div className="container">
        <Link className="homePage__link" to={"/some-demo/carousel"}>
          carousel
        </Link>
        <Link className="homePage__link" to={"/some-demo/modal"}>
          modal
        </Link>
        <Link className="homePage__link" to={"/some-demo/gallery"}>
          gallery
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
