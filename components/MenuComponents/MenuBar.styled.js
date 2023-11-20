import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 250px;
  height: 75%;
  background: #fff;
  position: fixed;
  top: 0;
  left: ${({ menuVisible }) => (menuVisible ? '0' : '-200px')};
  transition: right 0.3s ease-in-out;
  z-index: 10;
  border: 1px solid #000;
`;

export const Container = styled.div`
/*   width: 250px;
  height: 70px; */
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
`;

export const ProfileComponent = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0 0 15px;
`;

export const Profile1 = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 800;
`;

export const Profile2 = styled.span`
  color: #000;
  font-size: 13px;
  font-weight: 200;
`;

export const Mail = styled.div`
  color: #7D7D7D;
  font-family: Inter;
  font-size: 9px;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;

`;

export const Mypage = styled.div`
  color: #3D3D3D;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
  cursor: pointer;
`;

export const MypageImg = styled.img`
  width: 5px;
  height: 5px;
  margin-left: 6px;
  cursor: pointer;
`;

export const Event1 = styled.div`
  width: 200px;
  height: 25px;
  color: #000;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  border-radius: 4px;
  margin: 25px 0 10px 15px;
  background: #F4F4F4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Event2 = styled.div`
  width: 200px;
  height: 25px;
  color: #000;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  border-radius: 4px;
  background: #F4F4F4;
  display: flex;
  margin-left: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Logout = styled.div`
  width: 40px;
  color: #E72424;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  display: flex;
  margin-left: 15px;
  margin: 290px 0 0 20px;
  cursor: pointer;
`;