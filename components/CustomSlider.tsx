import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTR } from "@/useTR";

const slidesData = [
  {
    captionKey: "slider.ai_campus_management",
    // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    image: "/images/sec4/1.png",
  },
  {
    captionKey: "slider.intelligent_railway_monitoring",
    // image: "https://images.unsplash.com/photo-1581092162381-0e1c0c3e4e4a",
    image: "/images/sec4/2.jpg",
  },
  {
    captionKey: "slider.smart_textile_health_wearables",
    // image: "https://images.unsplash.com/photo-1558618047-3c8c76c7a1b5",
    image: "/images/sec4/3.webp",
  },
  {
    captionKey: "slider.ai_food_quality_inspection",
    // image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c",
    image: "/images/sec4/4.webp",
  },
  {
    captionKey: "slider.d_printed_dental_solutions",
    // image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
    image: "/images/sec4/5.jpg",
  },
  {
    captionKey: "slider.automated_pharmaceutical_manufacturing",
    // image: "https://images.unsplash.com/photo-1581092160607-8d4f9a8a5d7e",
    image: "/images/sec4/6.jpg",
  },
  {
    captionKey: "slider.smart_city_traffic_management",
    // image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    image: "/images/sec4/7.jpg",
  },
  {
    captionKey: "slider.digital_twin_railway_infrastructure",
    // image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    image: "/images/sec4/8.jpg",
  },
  {
    captionKey: "slider.ml_drug_discovery",
    // image: "https://images.unsplash.com/photo-1559757148-5e9952d7b6f0",
    image: "/images/sec4/9.gif",
  },
  {
    captionKey: "slider.robotic_advanced_manufacturing",
    image: "/images/sec4/10.jpg",
  },
];

const CustomSlider: React.FC = () => {
  const tr = useTR();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slideWidth, setSlideWidth] = useState(300);
  const [wrapperWidth, setWrapperWidth] = useState(800);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(slidesData.length).fill(false));

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const total = slidesData.length;
  const step = slideWidth * 0.5;

  // Measure responsive slide & wrapper size
  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current || !containerRef.current) return;
      const wrapper = wrapperRef.current;
      setWrapperWidth(wrapper.clientWidth);

      const slide = wrapper.querySelector('.slide') as HTMLElement | null;
      if (slide) setSlideWidth(slide.clientWidth);
    };

    const timeout = setTimeout(measure, 80);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [total]);

  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    pauseAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(((index % total) + total) % total);
    setDragDelta(0);
  };

  const next = () => goToSlide(currentIndex + 1);
  const prev = () => goToSlide(currentIndex - 1);

  // Handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Check if images are already loaded (cached)
  useEffect(() => {
    const checkImages = () => {
      imageRefs.current.forEach((img, index) => {
        if (img && img.complete) {
          handleImageLoad(index);
        }
      });
    };

    // Delay checking to ensure refs are set
    setTimeout(checkImages, 100);
  }, []);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startIndexRef.current = currentIndex;
    setDragDelta(0);
    pauseAutoplay();
  };

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current) return;
    setDragDelta(e.clientX - startXRef.current);
  }, []);

  const onPointerUp = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const delta = e.clientX - startXRef.current;
    const slidesMoved = delta / step;
    const target = Math.round(startIndexRef.current - slidesMoved);
    goToSlide(target);

    resumeAutoplay();
  }, [step, goToSlide]);

  useEffect(() => {
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  // z-index calculation for proper overlay stacking
  const getStyle = (index: number) => {
    const effective = currentIndex + dragDelta / step;
    const distance = Math.abs(index - effective);

    // Calculate position offset
    const positionOffset = (index - effective) * step;
    const centerOffset = (wrapperWidth - slideWidth) / 2;
    const left = positionOffset + centerOffset;

    // Scale based on distance from center
    const scale = Math.pow(1 - (distance / total) * 1, 2);

    // Current slide gets highest z-index (40)
    // Slides to the right get decreasing z-index based on distance
    // This ensures current slide always overlays the next one
    let zIndex = 40; // Base for current

    if (index !== currentIndex) {
      // For non-current slides, reduce z-index based on distance
      const isToRight = index > currentIndex;
      const distancePenalty = Math.floor(distance * 2);
      zIndex = 40 - distancePenalty - (isToRight ? 5 : 0); // Extra penalty for right slides
    }

    // Clamp z-index between 1 and 40
    const safeZ = Math.max(1, Math.min(zIndex, 40));

    return {
      left: `${left}px`,
      transform: `scale(${scale})`,
      zIndex: safeZ,
      transition: isDragging ? 'none' : 'left 300ms ease, transform 300ms ease',
    };
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto relative isolate"
      >
        <div
          className="relative mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {/* Slider Wrapper */}
          <div
            ref={wrapperRef}
            className="relative h-[380px] sm:h-[420px] md:h-[460px] w-full overflow-hidden rounded-2xl backdrop-blur-sm"
            onPointerDown={onPointerDown}
            style={{
              contain: 'paint layout',
              transform: 'translateZ(0)',
            }}
          >
            {/* Vignette Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 10 }}
            />

            {/* Slides Container */}
            <div className="absolute inset-0">
              {slidesData.map((slide, i) => (
                <div
                  key={i}
                  className="slide absolute top-0 w-[260px] sm:w-[290px] md:w-[300px] h-full rounded-xl overflow-hidden shadow-2xl border border-gray-600/30"
                  style={getStyle(i)}
                >
                  <img
                    ref={(el) => { imageRefs.current[i] = el; }}
                    src={slide.image}
                    // src={'/images/sec4/10.jpg'}
                    alt={tr(slide.captionKey)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={720}
                    height={1360}
                    onLoad={() => handleImageLoad(i)}
                    onError={() => handleImageLoad(i)}
                  />

                  {/* Conditionally show loading spinner only when image is not loaded */}
                  {!loadedImages[i] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20">
                      <div className="w-20 h-20 border-8 border-transparent border-t-[var(--f-green-2)] border-l-[var(--f-green-2)] rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full transition-all border border-gray-600/30 z-50"
            aria-label={tr("slider.previous_slide")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="white" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full transition-all border border-gray-600/30 z-50"
            aria-label={tr("slider.next_slide")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="white" viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>

          {/* Captions */}
          <div className="text-center mt-6">
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-medium italic min-h-[1.4em] transition-all bg-gradient-to-r from-[var(--f-green-1)] to-[var(--f-cyan-1)] bg-clip-text text-transparent">
              {tr(slidesData[currentIndex].captionKey)}
            </p>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6">
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === currentIndex
                    ? 'bg-[var(--f-green-1)] scale-125 shadow-lg'
                    : 'bg-gray-400/60 hover:bg-gray-300'
                  }`}
                aria-label={tr("slider.go_to_slide")}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-center mt-4 text-gray-400 text-sm">
            <span className="font-medium">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span className="font-light">{slidesData.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;