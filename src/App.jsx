import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "rgb(33,37,41)" : "white";
  }, [isDarkMode]);
  return (
    <>
      <div className={isDarkMode ? "bg-dark" : ""}>
        <Navbar
          title="Textutils"
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <TextForm heading="Enter Your Text Here:" isDarkMode={isDarkMode} />
        {/* <About isDarkMode={isDarkMode}/> */}
      </div>
    </>
  );
}

export default App;
