import { useState, MouseEvent, useEffect } from "react";
import styled from "@emotion/styled";
import type { ProjectImage } from "@/projects/utils";

type HorizontalGalleryProps = {
  images: ProjectImage[];
};

const HorizontalGallery = ({ images }: HorizontalGalleryProps) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  // Reset scroll position to 0 when component is mounted or when props change
  useEffect(() => {
    setScrollLeft(0);
    // console.log("Hello from HorizontalGallery", images)
  }, [images]);

  return (
    <PicturesGallery
      className={isDown ? "active" : ""}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <div className="container">
        {images && images.map(({src, alt, width, height}, index) => {
          return src ? (
            <img src={src} alt={alt ?? "No Description Provided"} key={index} />
          ) : (
            <ImageError key={index}>Error: Image not found</ImageError>
          );
        })}
      </div>
    </PicturesGallery>
  );
};

export default HorizontalGallery;

const ImageError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: monospace;
  font-size: 1.6rem;
  border: 1px solid var(--txt);
  min-height: 250px;
  min-width: 300px;
  color: var(--danger);
  background-color: var(--txt--brighter-transparent);
`;

const PicturesGallery = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 2.5rem;
  cursor: pointer;
  height: 270px;
  &.active {
    cursor: grabbing;
  }
  .container {
    height: 250px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: nowrap;

    img {
      pointer-events: none;
      width: 300px;
      height: auto;
    }
  }
`;
