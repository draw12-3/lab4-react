import { useState } from "react";
import images from "./data/images.json";
import Gallery from "./componenets/Gallery.jsx";

function App() {
  const [imageList, setImageList] = useState(images);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const next = () => {
    setSelectedIndex((prev) => {
      if (prev === imageList.length - 1) return 0;
      return prev + 1;
    });
  };

  const prev = () => {
    setSelectedIndex((prev) => {
      if (prev === 0) return imageList.length - 1;
      return prev - 1;
    });
  };

  const random = () => {
    setSelectedIndex((prev) => {
      let r = Math.floor(Math.random() * imageList.length);
      if (imageList.length > 1 && r === prev) r = (r + 1) % imageList.length;
      return r;
    });
  };

  const shuffle = () => {
    const shuffled = [...imageList].sort(() => Math.random() - 0.5);
    setImageList(shuffled);
    setSelectedIndex(0);
  };


  return (
    <Gallery
      imageList={imageList}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      onNext={next}
      onPrev={prev}
      onRandom={random}
      onShuffle={shuffle}   
    />
  );
}
export default App;