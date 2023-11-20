import React from 'react';
import * as S from './Footer.styled';

export default function Footer() {
   const handleSNS1Click = () => {
      // Create a URL for sharing via KakaoTalk
      const kakaoLink = 'https://www.kakaotalk.com';

      // Open the KakaoTalk link in a new window
      window.open(kakaoLink, '_blank');
   };

   const shareOnInstagram = () => {
      // Create a URL for sharing on Instagram
      const instagramShareLink = 'https://www.instagram.com/';

      // Open the Instagram share link in a new window
      window.open(instagramShareLink, '_blank');
   };

   const shareOnFacebook = () => {
      // Create a URL for sharing on Facebook
      const facebookShareLink = 'https://www.facebook.com/';

      // Open the Facebook share link in a new window
      window.open(facebookShareLink, '_blank');
   };



   return (
      <S.Container>
         <S.CopyrightTitle>KOKIT</S.CopyrightTitle>
         <S.CopyrightText>(주)kokit |  사업자번호: 112-53-121212<br />주소 : 충남 아산시 신창면 순천향로 22</S.CopyrightText>

         <S.SNSContainer>
            <S.SNS1 src="/img/kakao.png" onClick={handleSNS1Click} />
            <S.SNS2 src="/img/insta.png" onClick={shareOnInstagram} />
            <S.SNS3 src="/img/facebook.png" onClick={shareOnFacebook} />
         </S.SNSContainer>
      </S.Container>
   );
};
