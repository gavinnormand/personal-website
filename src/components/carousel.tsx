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
    <div className="w-[300px] mx-auto my-auto">
      <div className="relative w-full overflow-hidden rounded-md">
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
                width={500}
                alt={image.alt}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <button
          onClick={goToPrevious}
          className="text-icon hover:text-icon-hover"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={goToNext}
          className="text-icon hover:text-icon-hover ml-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
