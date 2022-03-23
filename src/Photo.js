import React from "react";
import "./Photo.css";

const Photo = ({ src, alt, user, top, left, height, width }) => {
  return (
    <div className="Photo" style={{ top, left, height, width }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Photo;
