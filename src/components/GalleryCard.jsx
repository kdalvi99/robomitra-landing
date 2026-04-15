import FadeIn from "./FadeIn";

function GalleryCard({ title, image, alt, delay }) {
  return (
    <FadeIn as="article" className="gallery-card" delay={delay}>
      <img className="gallery-photo" src={image} alt={alt} />
      <div className="gallery-copy gallery-copy-overlay">
        <h3>{title}</h3>
      </div>
    </FadeIn>
  );
}

export default GalleryCard;
