import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About,CourseList } from "./";
import DeatiledSkill from "../skills-section/detailedSkillsSet"


const Syllabus=({match})=>{
    return(<DeatiledSkill SyllabusId={match.params.id}/>)
    
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
            <Route path='/courseList/:id' component={Syllabus} >
                
            </Route>
        </Switch>
        </div>;
export default NavContainer;