import React from "react";

const SocialBtns = () => {
  return (
    <div className="social-icon-container">
      <div className="social-icon-wrapper">
        <div className="social-btn">
          <img src="../images/twitter-icon.png" alt="" />
        </div>
        <div className="social-btn">
          <img src="../images/twitter-icon-hover.png" alt="" />
        </div>
      </div>
      <div className="social-icon-wrapper">
        <div className="social-btn">
          <img src="../images/discord-icon.png" alt="" />
        </div>
        <div className="social-btn">
          <img src="../images/discord-icon-hover.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialBtns;
