import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here...");
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleUpClick = () => {
    setText(text.toUpperCase())
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
