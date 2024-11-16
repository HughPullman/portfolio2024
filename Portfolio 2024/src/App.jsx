import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("1");
  const [change, setChange] = useState("1");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChange(selected);
    }, [600]);
  }, [selected]);

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
        {change === "1" ? (
          <>
            <Header active={selected} setActive={setSelected} />
            <Home selected={selected} setSelected={setSelected} />
          </>
        ) : (
          <></>
        )}
        {change === "2" ? (
          <>
            <Header active={selected} setActive={setSelected} />
            <Home selected={selected} setSelected={setSelected} />
          </>
        ) : (
          <></>
        )}
        {change === "3" ? (
          <>
            <Header active={selected} setActive={setSelected} />
            <Home selected={selected} setSelected={setSelected} />
          </>
        ) : (
          <></>
        )}
        {change === "4" ? (
          <>
            <Header active={selected} setActive={setSelected} />
            <Home selected={selected} setSelected={setSelected} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
