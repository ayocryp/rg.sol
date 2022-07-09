import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
// assets
import headingLottie from "../../assets/we-are-not.json";
import mintLottie from "../../assets/mint-btn.json";
import MintSoonLottie from "../../assets/mint-soon.json";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ConnectBtn = styled.div`
  width: 230px;
  padding-right: 100px;
  cursor: pointer;
`;

const Title = styled.div`
  width: 850px;
`;

const Blood = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background: url("images/blood-splash.png") no-repeat;
  background-size: 100% 100%;
  bottom: -50px;
  left: 130px;
`;

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Blood />
      <Title>
        <Lottie loop animationData={headingLottie} play />
      </Title>
      <ConnectBtn>
        <Lottie loop animationData={MintSoonLottie} play speed={1} />
      </ConnectBtn>
    </Wrapper>
  );
};

export default Content;
