
import React from 'react';
import * as S from "./Main.styled";
import Header from './Header';
import Container from './Container';
import Body from './Body';
import HomeCarousel from './HomeCarousel';
import Footer from './Footer';

export default function Main() {
  return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Container/>
            <HomeCarousel />
            <Body />
            <Footer />
        </S.Container>
      </S.Wrapper>
  );
}


