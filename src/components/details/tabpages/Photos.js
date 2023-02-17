import React from "react";
import "./photos.css";

function Photos({ rest_details }) {
  return (
    <div className="images">
      <div className="img-container absolute-center">
        <img src={rest_details.image_gallery[0]} alt="images1" />
        <img src={rest_details.image_gallery[1]} alt="images2" />
        <img src={rest_details.image_gallery[2]} alt="images3" />
        <img src={rest_details.image_gallery[3]} alt="images4" />
      </div>
    </div>
  );
}

export default Photos;
