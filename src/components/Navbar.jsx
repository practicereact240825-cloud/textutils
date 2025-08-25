import PropTypes from "prop-types";

export default function Navbar(props) {
  const mode = {
    backgroundColor: props.isDarkMode ? "rgba(0, 82, 164, 1)" : "rgba(33, 144, 255, 1)",
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
                <a className="nav-link active" aria-current="page" href="/" style={{color: mode.color}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{color: mode.color}}>
                  About
                </a>
              </li>
            </ul>
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
