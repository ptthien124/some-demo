import React, { useEffect, useState } from "react";
import "../../styles/carousel.css";

function Carousel() {
  const image1 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img1.jpeg";
  const image2 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img2.jpeg";
  const image3 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img4.jpeg";
  const image4 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img6.jpeg";

  const imgList = [image1, image2, image3, image4];

  let img = null;
  useEffect(() => (img = document.querySelectorAll(".carousel__img")));

  const [index, setIndex] = useState(0);
  const [disable, setDisable] = useState(false);

  let indexList = [];
  if (index === imgList.length - 1) indexList = [index - 1, index, 0];
  else if (index === 0) indexList = [imgList.length - 1, index, index + 1];
  else indexList = [index - 1, index, index + 1];

  const handleLeftBtnClick = () => {
    if (disable === false) {
      setDisable(true);
      img.forEach((image) => image.classList.add("toLeft"));
      setTimeout(() => {
        if (index === imgList.length - 1) setIndex(0);
        else setIndex(index + 1);
        img.forEach((image) => image.classList.remove("toLeft"));
        setDisable(false);
      }, 500);
    }
  };

  const handleRightBtnClick = () => {
    if (disable === false) {
      setDisable(true);
      img.forEach((image) => image.classList.add("toRight"));
      setTimeout(() => {
        if (index === 0) setIndex(imgList.length - 1);
        else setIndex(index - 1);
        img.forEach((image) => image.classList.remove("toRight"));
        setDisable(false);
      }, 500);
    }
  };


  return (
    <div className="carousel-wrapper">
      <button onClick={handleLeftBtnClick} className="carousel__Btn">
        {"<"}
      </button>
      <div className="carousel">
        <img src={imgList[indexList[0]]} className="carousel__img"></img>
        <img src={imgList[indexList[1]]} className="carousel__img"></img>
        <img src={imgList[indexList[2]]} className="carousel__img"></img>
      </div>
      <button onClick={handleRightBtnClick} className="carousel__Btn">
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
