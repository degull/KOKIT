import React, { useState } from 'react';
import * as S from "./Header.styled";
import MenuBar from "../MenuComponents/MenuBar";

export default function Header(){
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
   
      <S.Container>
        <S.MenuBar src='/img/menubar.png' onClick={toggleMenu} menuVisible={menuVisible}/>
        <S.Logo src="/img/logo.png" />

        {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
      </S.Container>
    
  );
};