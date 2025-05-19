"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * images.length));

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-row">
        <button
          onClick={goToPrevious}
          className="text-icon hover:text-icon-hover"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-menus dark:text-icon" />
        </button>
      <div className="relative w-[300px] lg:w-[400px] overflow-hidden rounded-md">
        <div
          className="h-full w-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-full w-full flex-shrink-0">
              <img
                src={image.src}
                height={1000}
                width={800}
                alt={image.alt}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
        <button
          onClick={goToNext}
          className="text-icon hover:text-icon-hover ml-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-menus dark:text-icon" />
        </button>
    </div>
  );
};

export default Carousel;
