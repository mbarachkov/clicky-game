import React from "react";

//pass the image into each card so all 12 are rendered
const BobaImage = props => (
  <div className="card" onClick={props.handleImageClick}>
    <div className="img-container">
      <img alt={props.fileName.replace(".png", "")} src={(process.env.PUBLIC_URL + "/img/" + props.fileName)} />
    </div>
  </div>
);

export default BobaImage;