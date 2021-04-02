import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About,CourseList } from "./";
const NavContainer =()=>
<div>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/courseList'>
                    <CourseList/>
                </Route>
            </Switch>
        </div>;
export default NavContainer;