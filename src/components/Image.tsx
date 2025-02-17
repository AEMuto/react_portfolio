import { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { BaseProps } from "@/types"

interface ImageProps extends BaseProps<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  loading?: "lazy" | "eager"
  threshold?: number // Intersection observer threshold
  rootMargin?: string // Intersection observer root margin
}

const Image = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  loading = "lazy",
  threshold = 0.1,
  rootMargin = "50px 0px",
  ...props 
}: ImageProps) => {
  const [currentSrc, setCurrentSrc] = useState<string>("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const imageRef = useRef<HTMLDivElement>(null)

  // Handle intersection observer
  useEffect(() => {
    if (priority) return // Skip if priority loading

    const element = imageRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [priority, threshold, rootMargin])

  // Handle image loading
  useEffect(() => {
    // Reset states when src changes or when shouldLoad becomes true
    if (!shouldLoad) return

    setIsLoaded(false)
    setCurrentSrc("")

    const loadImage = async () => {
      try {
        // Create an array of formats to try, in order of preference
        const formats = ["avif", "webp", "jpg", "jpeg", "png"]
        const imagePath = src.replace(/\.[^/.]+$/, "") // Remove extension

        // Try each format until one works
        for (const format of formats) {
          const formatSrc = `${imagePath}.${format}`
          try {
            const response = await fetch(formatSrc, { method: "HEAD" })
            if (response.ok) {
              setCurrentSrc(formatSrc)
              return
            }
          } catch (e) {
            continue // Try next format
          }
        }

        // If no modern format works, fallback to original
        setCurrentSrc(src)
      } catch (error) {
        console.error("Error loading image:", error)
        setCurrentSrc(src) // Fallback to original source
      }
    }

    // Use requestIdleCallback for non-priority images
    if (priority) {
      loadImage()
    } else {
      const handleLoad = () => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => loadImage(), { timeout: 2000 })
        } else {
          setTimeout(loadImage, 1)
        }
      }

      handleLoad()
    }
  }, [src, shouldLoad, priority])

  // Preload handler for priority images
  useEffect(() => {
    if (priority && currentSrc) {
      const preloadLink = document.createElement("link")
      preloadLink.rel = "preload"
      preloadLink.as = "image"
      preloadLink.href = currentSrc
      document.head.appendChild(preloadLink)

      return () => {
        document.head.removeChild(preloadLink)
      }
    }
  }, [priority, currentSrc])

  return (
    <ImageWrapper 
      ref={imageRef}
      $isLoaded={isLoaded}
      $width={width}
      $height={height}
    >
      {/* Show blur preview only if image isn"t loaded yet */}
      {!isLoaded && shouldLoad && (
        <BlurPreview
          src={`${src.replace(/\.[^/.]+$/, "")}-blur.webp`}
          alt=""
          aria-hidden="true"
          $isLoaded={isLoaded}
        />
      )}
      
      {/* Main image */}
      {currentSrc && shouldLoad && (
        <StyledImage
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // Fallback to original source if optimized version fails
            if (currentSrc !== src) {
              setCurrentSrc(src)
            }
          }}
          $isLoaded={isLoaded}
          {...props}
        />
      )}
    </ImageWrapper>
  )
}

export default Image

const ImageWrapper = styled.div<{
  $isLoaded: boolean
  $width?: number
  $height?: number
}>`
  position: relative;
  width: ${props => props.$width ? `${props.$width}px` : "100%"};
  height: ${props => props.$height ? `${props.$height}px` : "auto"};
  overflow: hidden;
  background-color: var(--body--background);
  
  /* Add minimal height if no dimensions specified */
  min-height: ${props => (!props.$width && !props.$height) ? "100px" : "auto"};
`

const BlurPreview = styled.img<{ $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(10px);
  transform: scale(1.1);
  opacity: ${props => props.$isLoaded ? 0 : 1};
  transition: opacity 0.3s ease-in-out;
`

const StyledImage = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`