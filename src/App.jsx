import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";
import { toast, ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayer.filter(
      (ply) => ply.playerName !== p.playerName
    );
    console.log(filteredData);
    toast.success(`${p.playerName} remove successfully`);
    setPurchasedPlayer(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <header className="max-w-[1380px] mx-auto p-4">
        <Navbar availableBalance={availableBalance}></Navbar>
        <Banner></Banner>
      </header>
      <main className="max-w-[1380px] mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {toggle
              ? "Available Players"
              : `Selected Players (${purchasedPlayer.length}/6)`}
          </h1>

          <div className="flex ">
            <button
              onClick={() => setToggle(true)}
              className={`border cursor-pointer border-r-0 border-[#1313131A] px-4 py-3 rounded-l-xl  ${
                toggle
                  ? "bg-[#E7FE29] text-[#131313] font-bold"
                  : "text-[#13131399]"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`border cursor-pointer px-4 py-3 rounded-r-xl border-l-0 border-[#1313131A] ${
                !toggle
                  ? "bg-[#E7FE29] text-[#131313] font-bold"
                  : "text-[#13131399]"
              }`}
            >
              Selected({purchasedPlayer.length})
            </button>
          </div>
        </div>

        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          {toggle === true ? (
            <AvailablePlayers
              playerPromise={playerPromise}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              purchasedPlayer={purchasedPlayer}
              setPurchasedPlayer={setPurchasedPlayer}
            ></AvailablePlayers>
          ) : (
            <SelectedPlayers
              purchasedPlayer={purchasedPlayer}
              setPurchasedPlayer={setPurchasedPlayer}
              removePlayer={removePlayer}
            ></SelectedPlayers>
          )}
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
