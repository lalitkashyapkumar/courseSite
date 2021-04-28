import { GET_SKILLS_DATA, GET_SYLLABUS_DATA, GET_LOGIN } from "./types";

const initialState = {
    skills:{},
    syllabus:{},
    user:{}
}

const rootReducer = (state=initialState, actions)=>{
    switch (actions.type) {
        case GET_SKILLS_DATA:
            return {
                ...state,
                skills:actions.value
            }
            
        case GET_SYLLABUS_DATA:
            return {
                ...state,
                syllabus:actions.value
            }
            
        case GET_LOGIN:
            console.log(actions.user);
        return {
            ...state,
            user:actions.user
        }
        default:
            return state;
    }
}

export default rootReducer;