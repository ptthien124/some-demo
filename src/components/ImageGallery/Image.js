import React from "react";
import "../../styles/ImageGallery/Image.css";

function Image({ img }) {
  return (
    <div className="image">
      <img src={img} alt="" />
    </div>
  );
}

export default Image;
