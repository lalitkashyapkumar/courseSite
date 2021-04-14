import { GET_SKILLS_DATA, GET_SYLLABUS_DATA } from "./types";

const initialState = {
    skills:{},
    syllabus:{}
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
        default:
            return state;
    }
}

export default rootReducer;