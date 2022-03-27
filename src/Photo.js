import { useState } from "react";
import "./Photo.css";

const Photo = ({ src, alt, top, left, height, width, user }) => {
  const [largen, setLargen] = useState(false);
  return (
    <div className="Photo" style={{ top, left, height, width }}>
      <div className={`Photo-overlay ${largen && "show"}`}></div>
      <div className={`Photo-large ${largen && "show"}`}>
        <i
          className="fas fa-times"
          onClick={() => {
            console.log("hi");
            setLargen(false);
          }}
        ></i>
        <img src={src} alt={alt} />
        <p>
          Image by <span>{user}</span> from <span>Unsplash.com</span>
        </p>
      </div>
      <img src={src} alt={alt} onClick={() => setLargen(true)} />
    </div>
  );
};

export default Photo;
