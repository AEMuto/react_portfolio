import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import type { BaseProps } from "@/types";

interface ImageProps extends BaseProps<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Check if we're in development mode
const isDev = import.meta.env.DEV;

const Image = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "100vw",
  onLoad,
  onError,
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);
  console.log("Image source: ", src);
  // Handle intersection observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const element = imageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${e}`);
    setHasError(true);
    setIsLoaded(true); // Consider the loading as "complete" even though it errored
    onError?.();
  };

  // If there's an error, show error state
  if (hasError) {
    return (
      <ImageWrapper ref={imageRef} $isLoaded={true} $width={width} $height={height} {...props}>
        <ImageError>
          Error: Image not found
          <ErrorDetails>{src}</ErrorDetails>
        </ImageError>
      </ImageWrapper>
    );
  }

  // In development, just render the original image
  if (isDev) {
    return (
      <ImageWrapper ref={imageRef} $isLoaded={true} $width={width} $height={height} {...props}>
        <StyledImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={(e) => handleError(e)}
          $isLoaded={true}
        />
      </ImageWrapper>
    );
  }
  
  // Generate paths for different formats and sizes
  const basePath = src.replace(/\.[^/.]+$/, "");

  return (
    <ImageWrapper ref={imageRef} $isLoaded={isLoaded} $width={width} $height={height} {...props}>
      {!isLoaded && shouldLoad && !isDev && (
        <BlurPreview src={`${basePath}-blur.webp`} alt="" aria-hidden="true" $isLoaded={isLoaded} />
      )}

      {shouldLoad && (
        <picture>
          <source
            type="image/avif"
            sizes={sizes}
            srcSet={`
                ${basePath}.avif,
                ${basePath}-640w.avif 640w,
                ${basePath}-320w.avif 320w
              `}
          />
          <source
            type="image/webp"
            sizes={sizes}
            srcSet={`
                ${basePath}.webp,
                ${basePath}-640w.webp 640w,
                ${basePath}-320w.webp 320w
              `}
          />
          <StyledImage
            src={`${basePath}.jpg`}
            srcSet={`
              ${basePath}.jpg,
              ${basePath}-640w.jpg 640w,
              ${basePath}-320w.jpg 320w
            `}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            sizes={sizes}
            onLoad={handleLoad}
            onError={(e) => handleError(e)}
            $isLoaded={isLoaded}
          />
        </picture>
      )}
    </ImageWrapper>
  );
};

export default Image;

const ImageWrapper = styled.div<{
  $isLoaded: boolean;
  $width?: number;
  $height?: number;
}>`
  position: relative;
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  height: ${(props) => (props.$height ? `${props.$height}px` : "auto")};
  overflow: hidden;
  min-height: ${(props) => (!props.$width && !props.$height ? "100px" : "auto")};
`;

const BlurPreview = styled.img<{ $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$isLoaded ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const StyledImage = styled.img<{ $isLoaded: boolean; width?: number; height?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  object-fit: cover;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`;

const ImageError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: monospace;
  font-size: 1.6rem;
  border: 1px solid var(--txt);
  width: 100%;
  height: 100%;
  min-height: 250px;
  color: var(--danger);
  background-color: var(--txt--brighter-transparent);
`;

const ErrorDetails = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: var(--txt);
  opacity: 0.7;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
