import { GET_SKILLS_DATA, GET_SYLLABUS_DATA, GET_LOGIN, GET_LOGOUT, GET_PROMOTION } from "./types";
import {auth} from "./firebase";
import { url } from "./baseUrl";

/***************get promotion data*******************/
export const getPromotion = ()=>(dispatch)=>{
    return fetch(`${url}/promotions`)
            .then((result)=>result.json())
            .then((promotion)=> dispatch(
                {type: GET_PROMOTION ,
                promotion
            })
        )
        .catch((e)=>console.log('Error: '+e));
}


/***************create account*******************/
export const createAccount = (creds)=>(dispatch)=>{
    return auth.createUserWithEmailAndPassword(creds.user, creds.pass)
    .then((userCredential) => { 
        var user = userCredential.user;
        dispatch({type: GET_LOGIN ,
            user
        });
        alert("Successfully created account and logged in");
    })
    .catch((error) => {
        alert("Create account error: "+error.message)
    });
}

/***************logout*******************/
export const logOut = ()=>(dispatch)=>{
    console.log("logging out");
    auth.signOut().then(() => {
        var user = {}
        dispatch({type: GET_LOGOUT ,
            user
        });
        alert("Successfully logged out")
    }).catch((error) => {
        console.log(error)
    });
}

//***************login*******************/
export const login = (creds)=>(dispatch)=>{
    return auth.signInWithEmailAndPassword(creds.user, creds.pass)
    .then(() => {
        var user = auth.currentUser;

        dispatch({type: GET_LOGIN ,
                user
        });
        alert("Successfully logged in")
    })
    .catch(error => alert(error.message))
}

export const getSkillsData=()=>(dispatch)=>{
        return fetch(`${url}/skills`)
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
        return fetch(`${url}/${courseId}`)
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
    login,
    logOut,
    createAccount,
    getPromotion
}