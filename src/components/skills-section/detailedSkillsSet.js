import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {object } from "prop-types";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/actions";

const mapStateToProps = (state)=>{
    return {
        syllabus : state.syllabus
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

const DeatiledSkill = ({SyllabusId, syllabus, actionsOperation:{getSkillsSyllabus}}) =>{
    useEffect(()=>{
        fetch('../DataScience.json')
        .then((result)=>{
        
        return result.json()}
        )
        .then((data)=>getSkillsSyllabus(data))
        .catch((e)=>console.log('error form user'+e));
    },[]);
    if(Object.keys(syllabus).length===0 ){
        return (
            <>
            <h2>Loading</h2><hr/>
            {/* <Card/> */}
            </>
        );
    }else{        // console.log(syllabus[SyllabusId]["SkillsGain"]);
        
        const skillsGain =  syllabus[SyllabusId]["SkillsGain"].split(", ").map((data, i)=>{
            return(<span key={i} className="badge badge-pill badge-light">{data}</span>)
        });

        return (
        <>
        <div className="bg-secondary bg-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-5">
                        <div className="mt-4 mb-4">
                            <h2 className="mt-4 mb-3"><b>{syllabus[SyllabusId]["title"]}</b></h2>
                            <span className="fa fa-star-o" data-rating="1"></span>
                            <span className="fa fa-star-o" data-rating="2"></span>
                            <span className="fa fa-star-o" data-rating="3"></span>
                            <span className="fa fa-star-o" data-rating="4"></span>
                            <span className="fa fa-star-o" data-rating="5"></span>
                        </div>
                        <div className="row mb-4">
                            <img src="/images/instructor.jpeg" alt="instructor" width="60rem" height="60rem" style={{clipPath: 'circle(50% at 50% 50%)'}}/> 
                            <div className="ml-3">
                            <h5>{syllabus[SyllabusId]["instructor"][0]["name"]}</h5>
                            {syllabus[SyllabusId]["instructor"][0]["profession"]}
                            </div>
                        </div>
                        <div>
                            <button className="btn bg-primary text-white mt-2 mb-2">
                                Enroll for free
                            </button>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6 mb-4 mt-5">
                        <h4>Offered by:</h4>
                        <h2>{syllabus[SyllabusId]["offeredBy"]}</h2>
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
                        {syllabus[SyllabusId]["about"]}
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
                    <Syllabus sylb={syllabus[SyllabusId]["Syllabus"]}/>
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