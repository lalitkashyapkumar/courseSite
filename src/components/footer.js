import React from "react";
import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <div className="col-12 bg-light pt-5">
            <div className="container ">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/courseList'>Courses</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">
                        Join with us
                        </button>
                    </div>
                    <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              144, UIT Sector 6<br />
		              Bhiwadi, Rajasthan<br />
		              INDIA<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 9461277363<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:help@helpful.com">
                      help@helpful.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn" href="https://www.reddit.com/"><i className="fa fa-reddit"></i></a>
                        <a className="btn" href="https://www.quora.com/"><i className="fa fa-quora"></i></a>
                        <a className="btn" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                        
                        <a className="btn" href="mailto:help@helpful.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 knowledgetrees</p>
                </div>
            </div>
                </div>
            </div>
    )
}

export default Footer;