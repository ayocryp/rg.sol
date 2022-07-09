import React, { useState } from "react";
import Content from "../components/Content";
import Drawer from "../components/Drawer";
import SocialBtn from "../components/SocialBtn";
// styled
import {
  MainWrapper,
  Led,
  Header,
  DrawerScop,
  ContentScop,
} from "./main.style";

const Main: React.FC = () => {
  const [isOn, setOn] = useState<boolean>(false);

  return (
    <MainWrapper isOn={isOn}>
      <Led onClick={() => setOn(!isOn)}></Led>
      <DrawerScop isOn={isOn}>
        <Drawer />
      </DrawerScop>
      <Header isOn={isOn}>
        <SocialBtn />
      </Header>
      <ContentScop isOn={isOn}>
        <Content />
      </ContentScop>
    </MainWrapper>
  );
};

export default Main;
