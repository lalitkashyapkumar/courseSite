import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {object } from "prop-types";
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
                <span className="fa fa-star-o" data-rating="1"></span>
                <span className="fa fa-star-o" data-rating="2"></span>
                <span className="fa fa-star-o" data-rating="3"></span>
                <span className="fa fa-star-o" data-rating="4"></span>
                <span className="fa fa-star-o" data-rating="5"></span>
                <hr className="mt-0 mb-0"/>
                <h5>{author}</h5>
                <p>{desc}</p>
                
            <Link to={`/courseList/${title}`} className="btn text-white mt-2">Read More</Link>
            </div>
        </div>
        
    );
}
const SkillSet = ({skills, actionsOperation:{getSkillsData}})=> {
    useEffect(()=>{
        fetch('skills.json')
        .then((res)=>{
            // console.log(res)
            return res.json()
        })
        .then((data)=>getSkillsData(data))
        .catch(()=>console.log('error'));
    },[]);

    if(Object.keys(skills).length===0){
        return (
            <>
            <h2>Loading</h2><hr/>
            {/* <Card/> */}
            </>
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