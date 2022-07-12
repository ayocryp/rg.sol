import React, { useEffect } from "react";
import { ReactComponent as Cabinet } from "../../src/assets/cabinet.svg";
import { gsap } from "gsap";

const Drawer: React.FC = () => {
  const boxClick = (e: any) => {
    const path = e.path || e.composedPath();
    const imagePath = path[1];
    if (!imagePath.classList.contains("cabinet-box")) return false;
    imagePath.classList.remove("cabinet-box");
    if (!imagePath.classList.contains("open")) {
      gsap.to(imagePath, {
        x: "+=-110",
        y: "+=50",
        onComplete: function () {
          imagePath.classList.add("cabinet-box");
          imagePath.classList.add("open");
          if (imagePath.id === "dont-know") {
            window.open(
              "https://twitter.com/WatcherGuru/status/1534956633251532801?s=20&t=YDVCD2HgNevt9wT8K9KK7Q",
              "_blank"
            );
          }
          if (imagePath.id === "contract") {
            window.open(
              "https://solscan.io/account/D6VgRJ6sGQUHM6yiiftk4bV7oVGzs9AqzFqFCG32Neie",
              "_blank"
            );
          }
        },
      });
    } else {
      gsap.to(imagePath, {
        x: "+=110",
        y: "-=50",
        onComplete: function () {
          imagePath.classList.add("cabinet-box");
          imagePath.classList.remove("open");
        },
      });
    }
  };

  useEffect(() => {
    const cabinetEl: any = document.querySelector(".svg-cabinet");
    cabinetEl.addEventListener("click", (e: any) => boxClick(e), true);
    return () => {
      cabinetEl.removeEventListener("click", boxClick);
    };
  }, []);

  return (
    <div className="drawer-container">
      <div className="box-container">
        <Cabinet />
      </div>
    </div>
  );
};

export default Drawer;
