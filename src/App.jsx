import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const playerPromise = fetchPlayers();
  return (
    <>
      <header className="max-w-[1380px] mx-auto p-4">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="max-w-[1380px] mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {toggle ? "Available Players" : "Selected Players (0/6)"}
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
              Selected(0)
            </button>
          </div>
        </div>

        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          {toggle === true ? (
            <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
          ) : (
            <SelectedPlayers></SelectedPlayers>
          )}
        </Suspense>
      </main>
    </>
  );
}

export default App;
