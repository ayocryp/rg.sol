import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 30px;
  padding-right: 80px;
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
      <Tweet />
      <Discord />
    </SocialWrapper>
  );
};

export default SocialBtn;
