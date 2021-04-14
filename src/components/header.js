import React from "react";
import { Link } from "react-router-dom";
import { Search, LogIn} from "./nav-component";

const Header = ()=>{
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
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
            <button type="button" className="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">
                      login
            </button>
            <LogIn/>
            </div>
        </nav>
        </>
    );
}

export default Header;