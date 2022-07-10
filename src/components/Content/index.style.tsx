import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ConnectBtn = styled(WalletDialogButton)`
  cursor: pointer;
  width: 230px;
  color: white;
  font-size: 50px;
  font-weight: 700;
  font-family: "Cookie", cursive;
  border-radius: 30% !important;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
  padding-top: 50px;
`;

export const Title = styled.div`
  width: 850px;
`;

export const Blood = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background: url("images/blood-splash.png") no-repeat;
  background-size: 100% 100%;
  bottom: -50px;
  left: 130px;
`;
export const MintContainer = styled.div``; // add your owns styles here

export const Connectbutton = styled.div`
  width: 200px;
  height: 100px;
  background: url("images/connect-wallet.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;
