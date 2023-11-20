import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
  position: relative;
  margin-top: 140px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

export const Image = styled.img`
  width: 390px;
  height: 116px;
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${props => props.width}%;
  align-items: flex-end; 
  justify-content: center; 
`;


