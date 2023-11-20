import React from 'react';
import * as S from './Info.styled';
import Header from '../../../components/MainComponents/Header';

export default function Info(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />

            <S.MainImage src='/img/korea_01.png' />

            {/* 1번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/one.png" />
                <S.Title1>정식국명</S.Title1>
            </S.InfoComponent>

            <S.NameInfo>대한민국(Republic of Korea), 줄여서 '한국(Korea)'이라고도 부른다.</S.NameInfo>

            {/* 2번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/two.png" />
                <S.Title1>위치와 면적</S.Title1>
            </S.InfoComponent>

            <S.NameInfo>아시아 대륙 북동쪽 한반도에 위치하며, 남한의 면적은 100,188.1km²로 한반도와 부속도서를 포함한 남·북한 전체 면적 221,000km²의 45%이다.
                        한반도의 면적은 캄보디아(181,035km²)보다 조금 크고, 필리핀(300,000km²), 베트남(331,210 km²), 일본(377,915km²)의 약 2/3 정도의 크기이다.
                        남북한을 아우르는 한반도는 북서쪽으로 압록강을 경계로 중국과 경계를 이루고, 북동쪽으로는 두만강을 경계로 중국 및 러시아와 마주하고 있다. 
                        3면이 바다인 한국은 서쪽으로 황해, 동쪽으로 동해, 남쪽으로 남해에 의해 둘러싸여 있다. 한반도의 남부 및 서부는 대체로 평야이며, 동부 및 북부는 산지이다.
                        한반도에서 가장 높은 산은 백두산(2,744m)이다. 북부의 개마고원은 ‘한국의 지붕’이라고 불리며, 반도의 동해안을 따라 달리는 산맥인 태백산맥은 백두대간이라고도 불린다.
                        유명한 섬으로는 제주도, 거제도, 진도, 울릉도 등이 있는데, 제주도와 울릉도는 화산활동에 의해 형성되었다. 황해안과 남해안은 리아스식 해안이 발달되어 있으며, 
                        조수간만의 차가 크다(출처 : 국토교통부).</S.NameInfo>

            {/* 3번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/three.png" />
                <S.Title1>국기(태극기)</S.Title1>
            </S.InfoComponent>

            <S.Taegeak src='/img/Taegeak.png' />

            <S.NameInfo>한국의 국기인 ‘태극기’는 흰색 바탕에 가운데 태극 문양과 네 모서리의 건곤감리(乾坤坎離) 4괘(四卦)로 구성되어 있다.
                     태극기의 흰색 바탕은 밝음과 순수 그리고 전통적으로 평화를 사랑하는 우리의 국민성을 나타내고 있다.
                     가운데의 태극 문양은 음(陰 : 파란색)과 양(陽 : 빨간색)의 조화를 상징하는 것으로 우주 만물이 음양 의 상호 작용에 의해 생성하고 발전한다는 대자연의 진리를 형상화한 것이다.
                     네 모서리의 4괘는 음과 양이 서로 변화하고 발전하는 모습을 효(爻)*의 조합을 통해 구체적으로 나타낸 것이다.
                     *역(易)의 괘(卦)를 나타내는 가로 그은 획, ‘—’을 음(陰)으로 하고 ‘-’을 양(陽)으로 함.
                     그 가운데 건괘(乾卦 : ☰)는 우주 만물 중에서 하늘을, 곤괘(坤卦 : ☷)는 땅을, 감괘(坎卦 : ☵)는 물을, 이괘(離卦 : ☲)는 불을 상징한다.
                     이들 4괘는 태극을 중심으로 통일과 조화를 이루고 있다.
                     이와 같이, 예로부터 우리 선조들이 생활 속에서 즐겨 사용하던 태극 문양을 중심으로 만들어진 태극기는 우주와 더불어 끝없이 창조와 번영을 희구하는 대한민국 국민의 이상을 담고 있다(출처 : 행정안전부).
            </S.NameInfo>


            {/* 4번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/four.png" />
                <S.Title1>국화(무궁화)</S.Title1>
            </S.InfoComponent>

            <S.Taegeak src='/img/flower.png' />

            <S.NameInfo>예로부터 우리 민족의 사랑을 받아온 무궁화(無窮花)는 우리나라를 상징하는 꽃으로 ‘영원히 피고 또 피어서 지지 않는꽃’이라는 뜻을 지니고 있다.
                        옛기록을 보면 우리 민족은 무궁화를 고조선 이전부터 하늘나라의 꽃으로 귀하게 여겼고, 신라는 스스로를 ‘근화향(槿花鄕 : 무궁화 나라)’이라고 부르기도 했다.
                        중국에서는 우리나라를 예로부터 “무궁화가 피고 지는 군자의 나라”라고 칭송했다.
                        이처럼 오랜 세월 동안 우리 민족과 함께 해 온 무궁화는 조선 말 개화기를 거치면서 “무궁화 삼천리 화려강산”이란 노랫말이 애국가에 들어간 이후 더욱 국민들의 사랑을 받아왔다.
                        이같은 무궁화에 대한 우리 민족의 한결같은 사랑은 일제 강점기에도 계속되었고, 광복 후에 무궁화를 자연스럽게 나라꽃(國花)으로 자리잡게 하였다 (출처 : 행정안전부).

            </S.NameInfo>

            {/* 5번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/five.png" />
                <S.Title1>인구</S.Title1>
            </S.InfoComponent>

            <S.NameInfo>한국의 총인구는 51,780,579명(2020 인구주택총조사, 통계청)으로 세계 28위에 해당하며, 인구 밀도는 516명/㎢(국토부 지적통계연보, 통계청 장래인구추계)으로 세계 23위 수준이다.</S.NameInfo>


            {/* 6번 */}
            <S.InfoComponent>
                <S.TitleImage1 src="/img/six.png" />
                <S.Title1>경제</S.Title1>
            </S.InfoComponent>

            <S.NameInfo>한국의 GDP는 1조 8,102억 달러로 세계 10위 수준이며, 1인당 GDP는 34,983.70달러이다. (2021 한국은행)</S.NameInfo>


         </S.Container>
      </S.Wrapper>
   );
};

