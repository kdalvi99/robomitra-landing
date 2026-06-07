import FadeIn from "./FadeIn";

function GalleryCard({ title, image, alt, delay, onClick }) {
  const isInteractive = typeof onClick === "function";
  return (
    <FadeIn
      as={isInteractive ? "button" : "article"}
      className={`gallery-card${isInteractive ? " gallery-card-button" : ""}`}
      delay={delay}
      type={isInteractive ? "button" : undefined}
      onClick={isInteractive ? onClick : undefined}
    >
      <img className="gallery-photo" src={image} alt={alt} />
      <div className="gallery-copy gallery-copy-overlay">
        <h3>{title}</h3>
        {isInteractive ? <p className="gallery-hint">Click to view in 3D</p> : null}
      </div>
    </FadeIn>
  );
}

export default GalleryCard;
