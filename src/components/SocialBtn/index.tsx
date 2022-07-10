import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  div {
    width: 90px;
    height: 90px;
  }
`;

const Tweet = styled.div`
  cursor: pointer;
  background: url("images/twitter-icon.png") no-repeat;
  background-size: contain;

  :hover {
    background: url("images/twitter-icon-hover.png") no-repeat;
    background-size: contain;
  }
`;
const Discord = styled.div`
  cursor: pointer;
  background: url("images/discord-icon.png") no-repeat;
  background-size: contain;
  :hover {
    background: url("images/discord-icon-hover.png") no-repeat;
    background-size: contain;
  }
`;

const SocialBtn: React.FC = () => {
  return (
    <SocialWrapper>
      <a
        href="https://twitter.com/wearegoingtorug"
        target="_blank"
        rel="noreferrer"
      >
        <Tweet />
      </a>
      <a href="https://discord.gg/wagrp" target="_blank" rel="noreferrer">
        <Discord />
      </a>
    </SocialWrapper>
  );
};

export default SocialBtn;
