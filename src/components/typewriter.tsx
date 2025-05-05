import React, { useEffect, useState } from "react";

interface TypingCarouselProps {
  words: string[];
}

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

const TypingCarousel: React.FC<TypingCarouselProps> = ({
  words,
}) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [time, setTime] = useState(typingSpeed);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isTyping && text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
          setTime(typingSpeed);
        } else if (!isTyping && text.length > 0) {
          setText(currentWord.substring(0, text.length - 1));
          setTime(deletingSpeed);
        } else if (isTyping) {
          setIsTyping(false);
          setTime(pauseTime);
        } else {
          setIsTyping(true);
          setWordIndex((wordIndex + 1) % words.length);
        }
      },
      time
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isTyping,
    words,
    wordIndex,
    time,
  ]);

  return (
    <span>
      {text}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </span>
  );
};

export default TypingCarousel;
