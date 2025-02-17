import { useState, MouseEvent, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "@components/Image";
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
  }, [images]);

  return (
    <PicturesGallery
      className={isDown ? "active" : ""}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <div className="container">
        {images.map(({src, alt}, index) => <Image key={index} src={src} alt={alt} width={300} sizes="300px"/>)}
      </div>
    </PicturesGallery>
  );
};

export default HorizontalGallery;

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
    & > div {
      overflow: unset;
      width: 300px;
    }
  }
`;
