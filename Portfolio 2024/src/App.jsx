import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BackCanvas = dynamic(() => import("./components/BackCanvas/BackCanvas"), {
  ssr: false,
});

function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("1");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="app">
        {/* {loading ? (
          <Loading />
        ) : (
          <>
            <Loading /> */}
        {/* </>
        )} */}
        <Header active={selected} setActive={setSelected} />
        <Home selected={selected} setSelected={setSelected} />
        <BackCanvas selected={selected} />
      </div>
    </>
  );
}

export default App;
