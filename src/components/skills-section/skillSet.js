import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {object } from "prop-types";
import Rating from "react-rating";
import Loader from "react-loader-spinner";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/actions";

const mapStateToProps =(state)=>{
    return {
        skills : state.skills
    }
        
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actionsOperation : bindActionCreators(actions, dispatch)
    }
}

const Card = ({skill: {title, author, rating, desc, _id}})=>{
    return(
        <div className="card bg-dark text-white" >
            <img className="card-img-top" src="images/buisness.jpg" alt="buisness"/>
            <div className="card-body">
                <h3><b>{title}</b></h3>
                <Rating
                    emptySymbol="fa fa-star-o star"
                    fullSymbol="fa fa-star star"
                    initialRating={rating}
                    readonly={true}
                 >

                </Rating>
                <hr className="mt-0 mb-0"/>
                <h5>{author}</h5>
                <p>{desc}</p>
                
            <Link to={`/courseList/${_id}`} className="btn text-white mt-2">Read More</Link>
            </div>
        </div>
        
    );
}
const SkillSet = ({skills, actionsOperation:{getSkillsData}})=> {
    useEffect(()=>{
        getSkillsData()
    },[]);

    if(Object.keys(skills).length===0){
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
    }
    else{
        var skillsList = Object.keys(skills);
        const renderSkills = Object.values(skills).map((data, i)=>(
            data.map((d, cn)=>{
                if(cn==0){
                    return (<>
                    <h2 className="col-12">{skillsList[i]}</h2>
                    <div key={d._id} className="col-12 col-md-4 mb-5">
                    <Card skill = {d}/>
                    </div>
                    </>)
                }else{                    
                    return (
                        <div key={d._id} className="col-12 col-md-4 mb-5">
                            <Card skill = {d}/>
                        </div>
                        )
                }
                
            }
            
            )
            
        ));

        return (
            <div className="container">
                <div className="row">
                    {renderSkills}
                </div>
            </div>
        );
    }
        
    
}
  
SkillSet.prototype ={
    skills:object,
    actionsOperation:object
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillSet);