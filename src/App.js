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
      while (photos.length < photoNumber) {
        const res = await axios.get(
          "https://api.unsplash.com/photos/random/?client_id=-NHOwRYeg475kTXWwzhOGAIUF4eQyp8kW8pnjkL-4Lg",
          {
            params: {
              query: "wallpaper",
              orientation: "squarish",
            },
          }
        );
        photos.push({
          key: uuid(),
          src: res.data.urls.raw,
          alt: res.data.alt_description,
          user: res.data.user.name,
        });
      }
    };
    await getImg();
    setPhotos([...photos]);
  };
  useEffect(() => {
    if (photos.length === 0) createPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {photos.map((p) => (
        <Photo {...p} />
      ))}
    </>
  );
}

export default App;
