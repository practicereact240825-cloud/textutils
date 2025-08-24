import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Arpit Katiyar";
function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here:"/>
      </div>
    </>
  );
}

export default App;
