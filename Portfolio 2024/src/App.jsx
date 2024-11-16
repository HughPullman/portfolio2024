import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <div className="app">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Loading />
            <Header />
            <Home />
          </>
        )}
      </div>
    </>
  );
}

export default App;
