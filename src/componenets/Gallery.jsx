import "./Gallery.css";
import Prev from "./buttons/Prev.jsx"
import Shuffle from "./buttons/Shuffle.jsx"
import Random from "./buttons/Random.jsx"
import Next from "./buttons/Next.jsx"

export default function Gallery({
  imageList,
  selectedIndex,
  onSelect,
  onNext,
  onPrev,
  onRandom,
  onShuffle,
}) {

  const selected = imageList?.[selectedIndex];

  return (
    <div className="wrap">
      <h1 className="title">Galerie de Pisici</h1>
      <div className="stage">
        <div className="frame">
          <img
            className="stageImg"
            src={selected.url}
            alt={selected.title}
          />
        </div>
        <div className="controls">
          <Prev onPrev={onPrev}/>
          <Shuffle onShuffle={onShuffle}/>
          <Random onRandom={onRandom}/>
          <Next onNext={onNext}/>
        </div>
      </div>
      <div className="thumbRow">
        {imageList.map((img, idx) => (
          <button
            key={img.id}
            className={`thumbBtn ${idx === selectedIndex ? "active" : ""}`}
            onClick={() => onSelect(idx)}
            title={img.title}
          >
            <img
              className="thumbImg"
              src={img.url}
              alt={img.title}
            />
          </button>
        ))}
      </div>
    </div>
  );
}