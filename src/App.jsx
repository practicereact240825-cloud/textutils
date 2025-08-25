import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Arpit Katiyar";
function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here:"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
