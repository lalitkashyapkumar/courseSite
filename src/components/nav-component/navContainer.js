import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About,CourseList } from "./";
import  Watch  from "../watch-selection/watchComponent";
import DeatiledSkill from "../skills-section/detailedSkillsSet"

const Syllabus=({match})=>{
    return(<DeatiledSkill SyllabusId={match.params.id}/>)
}

const Chapter=({match})=>{
    return(
        <Watch SyllabusId={match.params.id} chapterId={match.params.chapterId}/>
    )
}


const NavContainer =()=>
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
            <Route exact path='/courseList/:id/:chapterId' component={Chapter} ></Route>

        </Switch>
        </div>;
export default NavContainer;