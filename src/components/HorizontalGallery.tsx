import { useState, MouseEvent } from "react";
import styled from "@emotion/styled";

type TGallery = {
  imgArray: string[];
  title?: string;
};

const HorizontalGallery = ({ imgArray, title }: TGallery) => {
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

  return (
    <PicturesGallery
      className={isDown ? "active" : ""}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <div className="container">
        {imgArray.map((pic_path, index) => (
          <img src={pic_path} alt={title ?? "No Description Provided"} key={index} />
        ))}
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

    img {
      pointer-events: none;
      width: 300px;
      height: auto;
    }
  }
`;
