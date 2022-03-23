import React from "react";
import "./Photo.css";

const Photo = ({ src, alt, user, top, left }) => {
  return (
    <div className="Photo" style={{ top: top, left: left }}>
      <img src={src} alt={alt} />
   
    </div>
  );
};

export default Photo;
