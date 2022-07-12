import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

const SocialBtns: React.FC = () => {
  const wallet = useWallet();

  return (
    <div className="social-icon-container">
      <div className="social">
        <a
          href="https://twitter.com/wearegoingtorug"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon-wrapper">
            <div className="social-btn">
              <img src="../images/twitter-icon.png" alt="twitter" />
            </div>
            <div className="social-btn">
              <img src="../images/twitter-icon-hover.png" alt="twitter" />
            </div>
          </div>
        </a>
        <a href="https://discord.gg/wagrp" target="_blank" rel="noreferrer">
          <div className="social-icon-wrapper">
            <div className="social-btn">
              <img src="../images/discord-icon.png" alt="discord" />
            </div>
            <div className="social-btn">
              <img src="../images/discord-icon-hover.png" alt="discord" />
            </div>
          </div>
        </a>
      </div>
      {!wallet.connected && (
        <WalletDialogButton
          style={{
            cursor: "pointer",
            background: "transparent",
            boxShadow: "none",
            width: "fit-content",
          }}
        >
          <img
            src="images/connect-wallet.png"
            alt="connect wallet"
            className="connect-btn"
          />
        </WalletDialogButton>
      )}
    </div>
  );
};

export default SocialBtns;
