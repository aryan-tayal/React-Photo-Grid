import PhotoGrid from "./PhotoGrid.js";
import "./App.css";

App.defaultProps = {
  photoNumber: 10,
};

function App({ photoNumber }) {
  return <PhotoGrid photoNumber={photoNumber} />;
}

export default App;
