import React from "react";

const Home=()=>(
    <div>
        <div className="col-12">
            <div className="jumbotron">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-md-6"> 
                            <h1 style={{ fontSize:'4.5rem'}}><b>Learn<br/>Without<br/>Limits</b></h1>
                            <p>
                            Take the next step in your career with a world className learning experience.
                            </p>

                            <button type="button" className="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">
                            Join Now
                            </button>
                        </div>
                        <div className="col-12 col-md-6" style={{ width:'70%', height:'70%'}} >
                            <img style={{ width:'90%', height:'90%'}} className="card-img-top" src="images/success.png" alt="buisness"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 text-center">
            <h2><b>We collaborate with 200+ leading universities and companies</b></h2>
            <div  className="col-md-8 mx-auto">
                <img style={{width:'100%',height:'90%'}} className="rounded mx-auto d-block" src="images/patners.jpg" alt="collebration"/>
            </div>
        </div>
        <div className="col-12">
            <div className="row bg-light mb-5">
                <div className="col-12 col-md-6 mb-5">
                    <img style={{width:'100%',height:'90%'}} className="rounded ml-5 mt-5 d-block" src="images/courses.png" alt="collebration"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mr-5 ml-5 mt-5 mb-5">
                        <h5 className="mb-5"><b>Accessible</b></h5>
                        <h1 style={{fontSize:'3rem'}}><b>Progress towards your goals</b></h1>
                        <p>Choose from many options including courses and university degrees to accelerate your career.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="col-12 carousel-inner ">
                    <div className="carousel-item active">
                        <div className="row">
                        <div className="col-10 col-sm-8 col-lg-4 col-md-6" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        </div>
                    </div>

                    {/* second slide */}
                    <div className="carousel-item">
                        <div className="row">
                        <div className="col-10 col-sm-8 col-lg-4 col-md-6" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit </b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit </b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        </div>
                    </div>

                    {/* third slide */}

                    <div className="carousel-item">
                        <div className="row">
                        <div className="col-10 col-sm-8 col-lg-4 col-md-6" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        <div className="col-10 col-sm-8 col-lg-4 col-md-6 d-none d-lg-block d-xl-block" style={{ marginLeft:'auto', marginRight: 'auto'}} >
                            <img className="card-img-top" src="images/buisness.jpg" alt="buisness" style={{clipPath: 'circle(35% at 50% 50%)'}}/>
                            <div className="card-body text-center">
                                <h3><b>Lalit Kumar</b></h3>
                                <p>Student at UIET, KUK</p>
                                <p>
                                "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship."
                                </p>
                            </div>
                        </div>

                        </div>
                    </div>

                </div> 
                <a className="carousel-control-prev bg-dark" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next bg-dark" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>

            <hr/>
            <br/>
            <hr/>
            <br/>
        </div>
    </div>
);
 export default Home;