import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Search, LogIn} from "./nav-component";
import { actions } from "../redux/actions";

const mapStatetoProps =(state)=>{
    return {
        user : state.user
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
    actionsOpr : bindActionCreators(actions, dispatch)
    }
}
const Header = ({user, actionsOpr:{logOut}})=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link  className="nav-link active" to='/'><span className="fa fa-home fa-lg"></span>&nbsp;&nbsp;Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" to='/about'><span className="fa fa-info fa-lg"></span>&nbsp;&nbsp;About</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link active" to='/courseList'><span className="fa fa-list fa-lg"></span>&nbsp;&nbsp;Course List</Link>
                        </li>
                    </ul>
                </div>
                <Search/>
                {
                    (Object.keys(user).length!==0) ?
                    <button onClick={()=>{logOut()}} type="button" className="btn btn-primary ml-1">
                        Logout
                    </button>
                    :
                    <button type="button" className="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">
                        Login
                    </button>
                }
                
                <LogIn/>
                </div>
            </nav>
        </>
    );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);