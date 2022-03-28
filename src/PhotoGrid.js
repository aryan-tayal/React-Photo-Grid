import { useState, useEffect } from "react";
import Photo from "./Photo.js";
import axios from "axios";
import "./PhotoGrid.css";
import "./Loader.css";

const PhotoGrid = ({ photoNumber }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const createPhotos = async () => {
    const getImg = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos/?client_id=-NHOwRYeg475kTXWwzhOGAIUF4eQyp8kW8pnjkL-4Lg",
        {
          params: {
            query: "space",
            per_page: photoNumber,
          },
        }
      );
      setPhotos([...res.data.results]);
    };
    await getImg();
    setLoading(false);
  };
  useEffect(() => {
    if (photos.length === 0) createPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="PhotoGrid">
      <div id="loader" className={!loading && 'hide'}>
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div id="main_circle"></div>
      </div>
      {photos.map((p) => (
        <Photo
          alt={p.alt_description}
          src={p.urls.raw}
          key={p.id}
          user={p.user.name}
          top={`${Math.floor(Math.random() * 12)}%`}
          left={`${Math.floor(Math.random() * 12)}%`}
          height={`${Math.floor(Math.random() * 200) + 200}px`}
          width={`${Math.floor(Math.random() * 200) + 200}px`}
          setLoading
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
