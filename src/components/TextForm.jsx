import { useState, useRef } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const textBoxRef = useRef(null);
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
    textBoxRef.current.focus();
  };
  const handleCopyClick = () => {
    textBoxRef.current.select();
    navigator.clipboard.writeText(textBoxRef.current.value);
  };
  const handleRemoveExtraSpacesClick = () => {
    setText((text.split(/[ ]+/)).join(" "));
  };
  const mode = {
      backgroundColor: props.isDarkMode ? "rgb(33,37,41)" : "white",
      color: props.isDarkMode ? "white" : "rgb(33,37,41)" 
    }
  return (
    <>
    
      <div className="container py-3" style={mode}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            ref={textBoxRef}
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter Text Here..."
            style={{
      backgroundColor: props.isDarkMode ? "rgba(53, 66, 78, 1)" : "rgba(235, 245, 255, 1)",
      color: props.isDarkMode ? "white" : "rgb(33,37,41)" 
    }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={mode}>
        <h1>Text Summary: </h1>
        <p>
          {text.length === 0 ? 0 : text.trim().split(" ").length} Words And{" "}
          {text.length} Characters
        </p>
        <p>
          Requires {(0.006 * text.split(" ").length).toFixed(2)} mins read time.
        </p>
      </div>
      <div className="container my-3" style={mode}>
        <h1>Read View: </h1>
        <p>{text}</p>
      </div>
    </>
  );
}
