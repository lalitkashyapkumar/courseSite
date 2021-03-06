import { GET_SKILLS_DATA, GET_SYLLABUS_DATA, GET_LOGIN, GET_LOGOUT, GET_PROMOTION } from "./types";

const initialState = {
    skills:{},
    syllabus:{},
    user:{},
    promotion:{}
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
            return {
                ...state,
                user:actions.user
            }
        case GET_LOGOUT:
            return {
                ...state,
                user:actions.user
            }
        case GET_PROMOTION:
            return {
                ...state,
                promotion:actions.promotion
            }
        default:
            return state;
    }
}

export default rootReducer;