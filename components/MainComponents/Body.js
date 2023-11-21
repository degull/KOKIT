/* 
import React from 'react';
import * as S from "./Body.styled";
import Link from 'next/link';

export default function Body() {
  return (
    <S.Container>
      <S.Row>

        <Link href="/pages/CategoryComponents/Service"><a>
          <S.Layout1><S.LayoutImg1 src='/img/service.png' /><S.Layout1Text>서비스</S.Layout1Text></S.Layout1>
          
          </a></Link>
        
        <a href="/CategoryComponents/Info/Info">
          <S.Layout2><S.LayoutImg2 src='img/information.png' /><S.Layout1Text>정보</S.Layout1Text></S.Layout2>
        </a>
        
      </S.Row>

      <S.Row>

        <a href="/Edu">
          <S.Layout3><S.LayoutImg3 src='img/community.png' /><S.Layout1Text>교육 / 문화</S.Layout1Text></S.Layout3>
        </a>

        <a href="/CategoryComponents/Job/Job">
          <S.Layout4><S.LayoutImg4 src='/img/job.png' /><S.Layout1Text>일자리</S.Layout1Text></S.Layout4>
        </a>
      </S.Row>

      <Link href="/ChatbotComponents/Chatbot">
        <S.Chatbot>
          <S.ChatbotImage src='/img/chatbot.png'/>
          <S.ChatbotTitle>CHAT BOT</S.ChatbotTitle>
        </S.Chatbot>
      </Link>
    </S.Container>
  );
}; *//* 
import React from 'react';
import { useRouter } from 'next/router';
import * as S from "./Body.styled";

const Body = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Row>
        <div onClick={() => router.push('/CategoryComponents/Service/Service')}>
          <S.Layout1>
            <S.LayoutImg1 src='/img/service.png' />
            <S.Layout1Text>서비스</S.Layout1Text>
          </S.Layout1>
        </div>
        
        <a href="/CategoryComponents/Info/Info">
          <S.Layout2>
            <S.LayoutImg2 src='img/information.png' />
            <S.Layout1Text>정보</S.Layout1Text>
          </S.Layout2>
        </a>
      </S.Row>

      <S.Row>
        <a href="/Edu">
          <S.Layout3>
            <S.LayoutImg3 src='img/community.png' />
            <S.Layout1Text>교육 / 문화</S.Layout1Text>
          </S.Layout3>
        </a>

        <a href="/CategoryComponents/Job/Job">
          <S.Layout4>
            <S.LayoutImg4 src='/img/job.png' />
            <S.Layout1Text>일자리</S.Layout1Text>
          </S.Layout4>
        </a>
      </S.Row>

      <div onClick={() => router.push('/ChatbotComponents/Chatbot')}>
        <S.Chatbot>
          <S.ChatbotImage src='/img/chatbot.png'/>
          <S.ChatbotTitle>CHAT BOT</S.ChatbotTitle>
        </S.Chatbot>
      </div>
    </S.Container>
  );
};

export default Body; */

/* 
        <S.MenuTabImg>
            <a href="/CategoryComponents/Public"><S.MenuTab1 src='img/Public_service.png'/></a>
            <a href="/CategoryComponents/Traffic"><S.MenuTab2 src='img/Traffic_service.png'/></a>
            <a href="/CategoryComponents/App"><S.MenuTab3 src='img/Application.png'/></a>

                <S.MenuTabTitle>
                <Link href="/CategoryComponents/Public"><S.MenuTitle1>public service</S.MenuTitle1></Link>
                <Link href="/CategoryComponents/Traffic"><S.MenuTitle2>traffic service</S.MenuTitle2></Link>
                <Link href="/CategoryComponents/App"><S.MenuTitle3>Application</S.MenuTitle3></Link>
                </S.MenuTabTitle>
         </S.MenuTabImg>

*/

import React from 'react';
import { useRouter } from 'next/router';
import * as S from "./Body.styled";

const Body = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Row>
        <div onClick={() => router.push('/CategoryComponents/Service/Service')}>
          <S.Layout1>
            <S.LayoutImg1 src='/img/service.png' />
            <S.Layout1Text>서비스</S.Layout1Text>
          </S.Layout1>
        </div>
        
        <div onClick={() => router.push('/CategoryComponents/Info/Info')}>
          <S.Layout2>
            <S.LayoutImg2 src='img/information.png' />
            <S.Layout1Text>정보</S.Layout1Text>
          </S.Layout2>
        </div>
      </S.Row>

      <S.Row>
        <div onClick={() => router.push('/CategoryComponents/Edu/Edu')}>
          <S.Layout3>
            <S.LayoutImg3 src='img/community.png' />
            <S.Layout1Text>교육 / 문화</S.Layout1Text>
          </S.Layout3>
        </div>

        <div onClick={() => router.push('/CategoryComponents/Job/Job')}>
          <S.Layout4>
            <S.LayoutImg4 src='/img/job.png' />
            <S.Layout1Text>일자리</S.Layout1Text>
          </S.Layout4>
        </div>
      </S.Row>

      <div onClick={() => router.push('/ChatbotComponents/Chatbot')}>
        <S.Chatbot>
          <S.ChatbotImage src='/img/chatbot.png'/>
          <S.ChatbotTitle>CHAT BOT</S.ChatbotTitle>
        </S.Chatbot>
      </div>
    </S.Container>
  );
};

export default Body;
