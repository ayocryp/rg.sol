import React from "react";

const SwitchBtn = () => {
  const elClick = () => {
    document.body.classList.toggle("bg-light-on");
    const cabinetEl: any = document.querySelector(".svg-cabinet");
    cabinetEl.style.display = "block";
  };

  return <div className="switch-btn" onClick={() => elClick()}></div>;
};

export default SwitchBtn;
