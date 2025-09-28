import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
      <header className="max-w-[1380px] mx-auto p-4">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="max-w-[1380px] mx-auto p-4">
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      </main>
    </>
  );
}

export default App;
