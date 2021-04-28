import { GET_SKILLS_DATA, GET_SYLLABUS_DATA, GET_LOGIN } from "./types";
import {auth} from "./firebase";
export const login = (creds)=>(dispatch)=>{
    return auth.signInWithEmailAndPassword(creds.user, creds.pass)
    .then(() => {
        var user = auth.currentUser;
        dispatch({type: GET_LOGIN ,
                user
        });
    })
    .catch(error => alert(error.message))
}

export const getSkillsData=()=>(dispatch)=>{
        return fetch('http://192.168.218.80:3001/skills')
            .then((result)=>result.json())
            .then((value)=>
            {   
                console.log(value)
                return dispatch(addSkills(value))
            }
        )
        .catch((e)=>console.log('error created by '+e));
}

const addSkills=(value)=>({
    type: GET_SKILLS_DATA,
    value
})

export const getSkillsSyllabus=(courseId)=>(dispatch)=>{
        return fetch(`http://192.168.218.80:3001/${courseId}`)
        .then((result)=>{
            // console.log(result)
            return result.json()
        }
        )
        .then((value)=>{
            // console.log(value);
            return dispatch(addSyllabus(value))}
            )
        .catch((e)=>console.log('error created by me '+e));

}

const addSyllabus=(value)=>({
    type: GET_SYLLABUS_DATA,
    value
})

export const actions ={
    getSkillsData,
    getSkillsSyllabus,
    login
}