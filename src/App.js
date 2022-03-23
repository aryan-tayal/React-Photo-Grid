import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Photo from "./Photo.js";
import axios from "axios";
import "./App.css";

App.defaultProps = {
  photoNumber: 5,
};

function App({ photoNumber }) {
  const [photos, setPhotos] = useState([]);

  const createPhotos = async () => {
    let photos = [];
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
    <>
      {photos.map((p) => (
        <Photo
          alt={p.alt_description}
          src={p.urls.raw}
          key={p.id}
          user={p.user.name}
        />
      ))}
    </>
  );
}

export default App;
