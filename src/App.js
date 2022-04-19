import { Route, Routes } from "react-router-dom";
import Gallery from "../src/components/ImageGallery/Gallery";
import Modal from "../src/components/modal/Modal";
import "./App.css";
import Carousel from "../src/components/carousel/Carousel";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/some-demo" element={<HomePage />} />
        <Route path="/some-demo/gallery" element={<Gallery />} />
        <Route path="/some-demo/modal" element={<Modal />} />
        <Route path="/some-demo/carousel" element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
