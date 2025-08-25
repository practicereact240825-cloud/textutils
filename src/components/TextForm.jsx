import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here...");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary: </h1>
        <p>{text.split(" ").length} Words And {text.length} Characters</p>
        <p>Requires {(0.006*text.split(" ").length).toFixed(2)} mins read time.</p>
      </div>
      <div className="container my-3">
        <h1>Read View: </h1>
        <p>{text}</p>
      </div>
      
    </>
  );
}
