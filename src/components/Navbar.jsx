import PropTypes from "prop-types";
import {Link} from "react-router"

export default function Navbar(props) {
  const mode = {
    backgroundColor: props.modeColor,
    color: props.isDarkMode ? "white" : "rgba(235, 243, 250, 1)",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: mode.backgroundColor}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color: mode.color}}>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color: mode.color}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: mode.color}}>
                  About
                </Link>
              </li>
            </ul>
            {/* Color Picker */}
              <input
                type="color"
                className="form-control form-control-color "
                 style={{backgroundColor: 'rgba(255,255,255,0)', borderColor : mode.color, borderWidth : "3px", padding: "2px" , height: "30px",width: "30px"}}
                title="Choose your color"
                value={props.modeColor}
                onChange={(e) => props.setModeColor(e.target.value)}
              />
              <label className="form-check-label mx-2" htmlFor="switchCheckChecked" style={{color: mode.color}}>
                  Choose Color 
                </label>
            <form className="d-flex" role="search" onClick={props.toggleDarkMode}>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckChecked"
                  checked = {props.isDarkMode}
                  readOnly
                />
                <label className="form-check-label" htmlFor="switchCheckChecked" style={{color: mode.color}}>
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
