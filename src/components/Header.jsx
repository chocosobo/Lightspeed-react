import React from "react";
import { HeaderLogoContainer, MainHeader } from "../styles/headerStyles";
import { LightspeedLogoURL } from "../assets/constants";

const Header = () => {
  return (
    <MainHeader>
      <HeaderLogoContainer>
        <img src={LightspeedLogoURL} alt="Lightspeed logo"></img>
        <h1>라이브 서버 테스트</h1>
      </HeaderLogoContainer>
    </MainHeader>
  );
};

export default Header;
