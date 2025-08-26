import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const showAlert = (message, type = "dark") => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert({
      message: "",
      type: "",
    });
    }, 1500);
  };
  const toggleDarkMode = () => {
    if(isDarkMode === false)
    {
      showAlert("Enabled Dark Mode!")
    }
    else 
    {
      showAlert("Enabled Light Mode!")
    }
    setDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? "rgb(33,37,41)"
      : "white";
  }, [isDarkMode]);

  return (
    <>
      <div className={isDarkMode ? "bg-dark" : ""}>
        <Navbar
          title="Textutils"
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert message={alert.message} type={alert.type} />
        <TextForm heading="Enter Your Text Here:" isDarkMode={isDarkMode} showAlert={showAlert}/>
        {/* <About isDarkMode={isDarkMode}/> */}
      </div>
    </>
  );
}

export default App;
