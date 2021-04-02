import React from "react";
import { Link } from "react-router-dom";
import { Search} from "./nav-component";
const Header = ()=>{
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link  className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link active" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link active" to='/courseList'>Course List</Link>
                    </li>
                </ul>
            </div>
            <Search/>
        </nav>
        </>
    );
}

export default Header;