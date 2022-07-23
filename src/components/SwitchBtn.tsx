import React, { useRef, useState } from "react";
import Mp3 from "../assets/audio/backgroundmusic.mp3";

const SwitchBtn: React.FC = () => {
  const audioPlayer = useRef<any>();
  const play = () => {
    audioPlayer.current.play();
  };

  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const elClick = () => {
    document.body.classList.toggle("bg-light-on");
    const cabinetEl: any = document.querySelector(".svg-cabinet");
    cabinetEl.style.display = "block";

    if (audioPlayer.current.duration > 0 && !audioPlayer.current.paused) {
      stop();
    } else {
      play();
    }
  };

  return (
    <div className="switch-btn" onClick={() => elClick()}>
      <audio src={Mp3} ref={audioPlayer} loop>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default SwitchBtn;
