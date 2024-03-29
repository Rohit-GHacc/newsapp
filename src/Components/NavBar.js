import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsPanda</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li><Link key="entertainment" className="nav-link " aria-current="page" to="/entertainment"  >Entertainment</Link></li>
              <li><Link key="general" className="nav-link " aria-current="page" to="/general"   >General</Link></li>
              <li><Link key="business" className="nav-link " aria-current="page" to="/business"  >Business</Link></li>
              <li><Link key="health" className="nav-link " aria-current="page" to="/health"  >Health</Link></li>
              <li><Link key="science" className="nav-link " aria-current="page" to="/science"  >Science</Link></li>
              <li><Link key="sports" className="nav-link " aria-current="page" to="/sports"  >Sports</Link></li>
              <li><Link key="technology" className="nav-link " aria-current="page" to="/technology"  >Technology</Link></li>

            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar