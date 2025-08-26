import React from "react";

export default function About(props) {
  // Derive styles from props directly
  const mode = {
    backgroundColor: props.isDarkMode ? "rgb(33,37,41)" : "white",
    color: props.isDarkMode ? "white" : "rgb(33,37,41)",
  };

  return (
    <>
      <div className="container py-1 " style={mode}>
        <h1 className="my-3">About Us...</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mode}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mode}>
                <strong>This is the first item’s accordion body.</strong>
                You can put any HTML here.
              </div>
            </div>
          </div>
          {/* Accordion Item #2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mode}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mode}>
                <strong>This is the second item’s accordion body.</strong>
              </div>
            </div>
          </div>
          {/* Accordion Item #3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mode}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mode}>
                <strong>This is the third item’s accordion body.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
