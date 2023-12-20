import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningPage from "./components/WarningPage";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update windowWidth when the window is resized
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add an event listener to window resize
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {windowWidth < 769 ? <Layout /> : <WarningPage />}
    </div>
  );
}

export default App;
