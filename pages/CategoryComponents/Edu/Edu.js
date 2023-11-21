import React from 'react';
import * as S from './Edu.styled';
import Header from '../../../components/MainComponents/Header';
import { useRouter } from 'next/router';

export default function Edu() {
  const router = useRouter();

  const handleHostClick = () => {
    router.push('/HostComponents/Host');
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Host onClick={handleHostClick}>호스트 센터</S.Host>
      </S.Container>
    </S.Wrapper>
  );
}
