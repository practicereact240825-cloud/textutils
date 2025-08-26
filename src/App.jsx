import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [modeColor, setModeColor] = useState("rgba(33, 144, 255, 1)");
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
    if (isDarkMode === false) {
      showAlert("Enabled Dark Mode!");
    } else {
      showAlert("Enabled Light Mode!");
    }
    setDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? "rgb(33,37,41)"
      : "white";
  }, [isDarkMode]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            title="Textutils"
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            setModeColor={setModeColor}
            modeColor={modeColor}
          />

          <Alert message={alert.message} type={alert.type} />
          <TextForm
            heading="Enter Your Text Here:"
            isDarkMode={isDarkMode}
            showAlert={showAlert}
            modeColor={modeColor}
          />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            title="Textutils"
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            setModeColor={setModeColor}
            modeColor={modeColor}
          />
          <Alert message={alert.message} type={alert.type} />
          <About isDarkMode={isDarkMode} modeColor={modeColor} />
        </>
      ),
    },
  ]);
  return (
    <>
      <div className={isDarkMode ? "bg-dark" : ""}>
        <RouterProvider router={router} />
        {/* <TextForm
          heading="Enter Your Text Here:"
          isDarkMode={isDarkMode}
          showAlert={showAlert}
          modeColor={modeColor}
        /> */}
        {/* <About isDarkMode={isDarkMode} modeColor={modeColor} /> */}
      </div>
    </>
  );
}

export default App;
