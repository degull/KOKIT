import React from 'react';
import * as S from './Login.styled'

export default function Login() {
  const handleKakaoLogin = async () => {
    // 클라이언트 측에서 백엔드 서버로 로그인 요청 보냄
    try {
      const response = await fetch('/api/kakao/login', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;

        // 액세스 토큰을 사용하여 카카오 API를 호출합니다.
        const kakaoResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (kakaoResponse.ok) {
          const userInfo = await kakaoResponse.json();
          console.log('카카오 사용자 정보:', userInfo);
        } else {
          console.error('카카오 사용자 정보 가져오기 실패');
        }
      } else {
        console.error('카카오 로그인 요청 실패');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (    
      <S.Wrapper>
         <S.Component>
          <S.Logo src='/img/logo_w.png' />
          <S.Text>간편하게 로그인하고<br />다양한 서비스를 이용해보세요.</S.Text>
          
          <S.Btn onClick={handleKakaoLogin}>카카오로 시작하기</S.Btn>
          <S.Bubble src='/img/bubble.png' />
         </S.Component>
      </S.Wrapper>
  );
}