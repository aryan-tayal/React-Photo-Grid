import { useState, useEffect } from "react";
import Photo from "./Photo.js";
import axios from "axios";
import './PhotoGrid.css'

const PhotoGrid = ({ photoNumber }) => {
  const [photos, setPhotos] = useState([]);

  const createPhotos = async () => {
    const getImg = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/search/photos/?client_id=-NHOwRYeg475kTXWwzhOGAIUF4eQyp8kW8pnjkL-4Lg",
        {
          params: {
            query: "space",
            orientation: "squarish",
            per_page: photoNumber,
          },
        }
      );
      setPhotos([...res.data.results]);
    };
    await getImg();
  };
  useEffect(() => {
    if (photos.length === 0) createPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="PhotoGrid">
      {photos.map((p) => (
        <Photo
          alt={p.alt_description}
          src={p.urls.raw}
          key={p.id}
          user={p.user.name}
          top={`${Math.floor(Math.random()*80)}%`}
          left={`${Math.floor(Math.random()*80)}%`}
        />

      ))}
    </div>
  );
};

export default PhotoGrid;
