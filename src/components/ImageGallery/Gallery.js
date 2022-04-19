import React, { useEffect } from "react";
import "../../styles/ImageGallery/Gallery.css";
import Image from "./Image";

function Gallery() {
  const img1 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img1.jpeg";
  const img2 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img2.jpeg";
  const img3 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img3.jpeg";
  const img4 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img4.jpeg";
  const img5 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img5.jpeg";
  const img6 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img6.jpeg";
  const img7 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img7.jpeg";
  const img8 =
    "https://www.nodemy.vn/projects/html-css-js/image-gallery/img8.jpeg";

  const list = [img1, img2, img3, img4, img5, img6, img7, img8];

  let gallery;
  let imgs;
  let image;
  let index = 0;

  useEffect(() => {
    imgs = document.querySelectorAll(".image");
    gallery = document.querySelector(".gallery");
    image = document.querySelector(".gallery-image");
    imgs.forEach((img, i) => {
      img.addEventListener("click", function () {
        gallery.classList.add("active");
        image.src = list[i];
      });
    });
  }, []);

  const handleCloseClick = () => {
    gallery.classList.remove("active");
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    if (index === 0) index = list.length - 1;
    else index--;
    image.src = list[index];
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    if (index === list.length - 1) index = 0;
    else index++;
    image.src = list[index];
  };

  return (
    <div className="gallery-body">
      <div className="wrapper">
        {list.map((image) => (
          <Image key={image} img={image} />
        ))}
      </div>
      <div onClick={handleCloseClick} className="gallery">
        <button className="close-btn">&times;</button>
        <button onClick={handlePrevClick} className="btn prev">
          {"<"}
        </button>
        <img
          src={list[index]}
          alt=""
          className="gallery-image"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <button onClick={handleNextClick} className="btn next">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Gallery;
