import React from 'react';
import * as S from './MenuBar.styled';

export default function MenuBar({ menuVisible, onClick }) {
   return (
      <S.Wrapper menuVisible={menuVisible}>
         <S.Container>
            <S.CloseButton onClick={onClick} src='/img/close.png'></S.CloseButton>

            <S.ProfileComponent>
               {/* 추후 데이터 받아오기 */}
               <S.Profile1>
                  홍길동
                  <S.Profile2> 님</S.Profile2>
               </S.Profile1>

               <S.Mail>abcdefg@gmail.com</S.Mail>

               <S.Mypage>마이페이지<S.MypageImg src='/img/arrow.png'/></S.Mypage>
            </S.ProfileComponent>

            <S.Event1>신청 행사</S.Event1>
            <S.Event2>관심 행사</S.Event2>

            <S.Logout>로그아웃</S.Logout>
         </S.Container>

         



      </S.Wrapper>
   );
};