import React, { useState, useRef, useEffect } from 'react';
import * as S from './HomeCarousel.styled';

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const images = ['/img/slide01.png', '/img/slide02.png', '/img/slide03.png'];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sliderWidth = images.length * 100;

  const slideStyle = {
    transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
  };

  return (
    <S.Container>
      <S.SliderContainer ref={containerRef}>
        <S.Slider ref={sliderRef} style={{ ...slideStyle, width: `${sliderWidth}%` }}>
          {images.map((image, index) => (
            <S.Image key={index} src={image} imageWidth={100 / images.length}></S.Image>
          ))}
        </S.Slider>
      </S.SliderContainer>
    </S.Container>
  );
}



