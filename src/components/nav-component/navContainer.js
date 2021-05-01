import React from "react";
import { connect} from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, About,CourseList } from "./";
import  Watch  from "../watch-selection/watchComponent";
import DeatiledSkill from "../skills-section/detailedSkillsSet";

const mapStatetoProps = (state)=>{
    return {
         user:state.user
    }
}

const Syllabus=({match})=>{
    return(<DeatiledSkill SyllabusId={match.params.id}/>)
}

const Chapter=({match})=>{
    console.log(match);
    return(
        <Watch SyllabusId={match.params.id} chapterId={match.params.chapterId}/>
    )
}

const PrivateRoute = ({ component: Component,user, ...rest })=>{
    // console.log("in private");
    if(Object.keys(user).length!==0){
        // console.log("in if ");
        return( 
        <Route {...rest} render={
            props=>{ console.log(props);
                return <Chapter {...props}/>}

        }/> )
    }

    return <>
        <Redirect to="/" />
    </>;
}

const NavContainer =({user})=>
    <div>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route exact path='/courseList'>
                <CourseList/>
            </Route>
            <Route exact path='/courseList/:id' component={Syllabus} ></Route>
            <PrivateRoute exact path='/courseList/:id/:chapterId' component={Chapter} user={user} ></PrivateRoute>

        </Switch>
        </div>;

export default connect(mapStatetoProps, null)(NavContainer);