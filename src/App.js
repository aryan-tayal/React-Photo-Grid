import PhotoGrid from "./PhotoGrid.js";
import "./App.css";

App.defaultProps = {
  photoNumber: 5,
};

function App({ photoNumber }) {
  return <PhotoGrid photoNumber={photoNumber} />;
}

export default App;
