import React, { useState, useCallback } from 'react';
import './App.css';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Carousel, { Modal, ModalGateway } from "react-images";
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    return (
      <div className="body">
          <header>
              <h1>FREAR PHOTOGRAPHY</h1>
              <img src="/img/camac-kitchen-1.jpg" alt="Sunlit kitchen with custom cabinets" className="main-img" />
              <h2>architectural and interior photography in philadelphia</h2>
          </header>
          <main>
            <Gallery photos={photos} direction={"column"} onClick={openLightbox} /> 
            <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <About />
      <Contact />
        </main>
      </div>
    
    );
}

export default App;
