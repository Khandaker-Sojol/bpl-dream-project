import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="max-w-[1380px] mx-auto p-4">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
    </>
  );
}

export default App;
