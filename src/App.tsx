import "./App.css";
import Main from "./components/Main";
import SwitchBtn from "./components/SwitchBtn";
import SocialBtns from "./components/SocialBtns";
import ReactAudioPlayer from "react-audio-player";
import Mp3 from "./assets/audio/backgroundmusic.mp3";
// Solana Integration
import { useMemo, useState } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import LoadingContext from "./context/Loading";
import Loading from "./components/Loading";

const network = (process.env.REACT_APP_SOLANA_NETWORK ??
  "mainnet-beta") as WalletAdapterNetwork;

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
            background-image: url("../images/bg-mobile-off.png");
        }
    }`;

const App: React.FC = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  const LoadStatus = useMemo(() => ({ isLoading, setLoading }), [isLoading]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <LoadingContext.Provider value={LoadStatus}>
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
            <Loading />
            <ReactAudioPlayer src={Mp3} autoPlay />
          </LoadingContext.Provider>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
