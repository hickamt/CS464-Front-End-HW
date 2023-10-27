import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <img
              src="GOT.png"
              alt="game of thrones logo"
              className="d-inline-block align-top nav-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* The following list items (<li>) are the navbar links to new pages */}
              <li className="nav-item active fs-4">
                <Link className="nav-link fs-4" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item active fs-4">
                <Link className="nav-link" to="/houses">
                  Houses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
