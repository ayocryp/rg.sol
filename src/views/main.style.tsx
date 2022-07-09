import styled from "styled-components";

export const MainWrapper = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${({ isOn }) =>
    !isOn
      ? "url('images/bg-off.png') no-repeat"
      : "url('images/bg-on.png') no-repeat"};
  background-size: cover;
`;

export const Led = styled.div`
  position: absolute;
  cursor: pointer;
  width: 80px;
  height: 250px;
  top: 5%;
  left: 57%;
`;

export const Header = styled.div<{ isOn: boolean }>`
  padding-top: 20px;
  display: ${({ isOn }) => (!isOn ? "none" : "block")};
`;

export const DrawerScop = styled.div<{ isOn: boolean }>`
  position: absolute;
  width: 35%;
  bottom: -5%;
  right: -6%;
  display: ${({ isOn }) => (!isOn ? "none" : "block")};
`;

export const ContentScop = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 850px;
  height: 560px;
  display: ${({ isOn }) => (!isOn ? "none" : "block")};
`;
