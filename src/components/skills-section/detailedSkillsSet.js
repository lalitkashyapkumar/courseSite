import React, { useEffect } from "react";
import Rating from "react-rating";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {object } from "prop-types";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/actions";

const mapStateToProps = (state)=>{
    return {
        syllabus : state.syllabus,
        user:state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actionsOperation : bindActionCreators(actions, dispatch)
    }
}

const WeekendSylby = ({week})=>{
    // console.log(week);
    const allWeekData = week.map((data, i)=>{
        return <div key={i} className="card" >
            <div className="card-body">
                {data.title}( {data.length} minutes)
            </div>
        </div>
        
    });
    
    return(
        <div >
            {allWeekData}
        </div>
    )
}

const Syllabus = ({sylb})=>{


    const sylbCard = sylb.map((data, i)=>{
        return <div key={i} className="card mb-4" >
            <div className="card-body">
                <h5 className="card-title"><b>Week {data.Week}: </b>{data.title}</h5>
                <p>
                    {data.description}
                </p>
                <h5><b>{data.length} hours(5 Video)</b></h5>                                        
                <a  data-toggle="collapse" href={"#week"+i} role="button" aria-expanded="false" aria-controls={"week"+i}>
                    See More</a>
            </div>
            <div id={"week"+i} className="collapse">
                <WeekendSylby week={data.weekWise}/>
            </div>
        </div>
    });
    return(
        <>
        {sylbCard}
        </>
    )
}

const DeatiledSkill = ({SyllabusId, syllabus, user, actionsOperation:{getSkillsSyllabus}}) =>{
    useEffect(()=>{
        getSkillsSyllabus(SyllabusId)
    },[]);

    if(Object.keys(syllabus).length===0 ){
        return (
            <div className="row justify-content-center">
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        );
    }else{        
        
        const skillsGain =  syllabus["SkillsGain"].split(", ").map((data, i)=>{
            return(<span key={i} className="badge badge-pill badge-light">{data}</span>)
        });

        return (
        <>
        <div className="bg-secondary bg-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-5">
                        <div className="mt-4 mb-4">
                            <h2 className="mt-4 mb-3"><b>{syllabus["title"]}</b></h2>
                            <Rating
                                emptySymbol="fa fa-star-o star"
                                fullSymbol="fa fa-star star"
                                initialRating={syllabus["rating"]}
                                readonly={true}
                                >
                            </Rating>
                        </div>
                        <div className="row mb-4">
                            <img src="/images/instructor.jpeg" alt="instructor" width="60rem" height="60rem" style={{clipPath: 'circle(50% at 50% 50%)'}}/> 
                            <div className="ml-3">
                            <h5>{syllabus["instructor"][0]["name"]}</h5>
                            {syllabus["instructor"][0]["profession"]}
                            </div>
                        </div>
                        <div>

                            {
                                (Object.keys(user).length!==0) ? 
                                <Link to={`/courseList/${SyllabusId}/introduction`} className="btn bg-primary text-white mt-2 mb-2">
                                Get enroll for free
                                </Link>
                                : 
                                <button type="button" className="btn btn-primary ml-1" data-toggle="modal" data-target="#exampleModal">
                                    Get enroll for free
                                </button>
                            }
                            
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6 mb-4 mt-5">
                        <h4>Offered by:</h4>
                        <h2>{syllabus["offeredBy"]}</h2>
                    </div>
                </div>
            </div>
        </div> 
        
        <nav className="navbar navbar-expand-lg  ">
            <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " >Instructor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " >Syllabus</a>
                    </li>
                </ul>
                
            </div>
            
        </nav>
        <hr/>
        <div className="container">
            <div className="row">
                <div id="about" className="col-12 col-md-8">
                    <div>
                    <h2>About this Course</h2>
                    <p>
                        {syllabus["about"]}
                    </p>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Skills You Will Gain</h5>
                            {skillsGain}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                
                <div className="col-12 col-md-8">
                <h2><b>Syllabus</b></h2>
                    <Syllabus sylb={syllabus["Syllabus"]}/>
                </div>
            </div>
        </div>
        </> 
    )
        }
}
DeatiledSkill.prototype ={
    syllabus:object,
    actionsOperation:object
}
export default connect(mapStateToProps, mapDispatchToProps)(DeatiledSkill);