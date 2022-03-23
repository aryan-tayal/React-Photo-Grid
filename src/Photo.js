import React from "react";
import "./Photo.css";

const Photo = ({ src, alt, user }) => {
  return (
    <div className="Photo">
      <img src={src} alt={alt} />
      <p>
        By <span>{user}</span> from <span>Unsplash</span>
      </p>
    </div>
  );
};

export default Photo;
