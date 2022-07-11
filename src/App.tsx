import "./App.css";
import Main from "./components/Main";
import SwitchBtn from "./components/SwitchBtn";
import SocialBtns from "./components/SocialBtns";
import bgImgOff from "./assets/bg-off.png";

function App() {
  const mobileBgCSS = `    
    .bg-light-on .main-bg-scene  {
        background-image: url("../images/bg-on.png");
    }

    .main-bg-scene {        
        background-image: url("../images/bg-off.png");
    }
    @media (min-width: 320px) and (max-width: 767.98px)  {
        .bg-light-on .main-bg-scene  {
            background-image: url("../images/bg-mobile-on.png");
        }
    
        .main-bg-scene {        
            background-image: url("./src/assets/bg-mobile-off.png");
        }
    }`;

  return (
    <>
      <style scoped>{mobileBgCSS}</style>

      <main className="page-wrapper">
        <div className="main-bg-scene">
          <header className="header">
            <nav className="navbar d-flex">
              <SocialBtns />
            </nav>
          </header>
          <SwitchBtn />
          <Main />
        </div>
      </main>
    </>
  );
}

export default App;
