import styled from "@emotion/styled";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
`;

export const Logo = styled.img`
  width: 68px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  position: absolute; 
  top: 15px; 
  left: 50%; 
  transform: translateX(-50%); 
  cursor: pointer;
`;

export const MenuBar = styled.img`
  width: 17px;
  position: absolute;
  top: 30px;
  left: 25px;
  cursor: pointer;
`;
