import { GET_SKILLS_DATA, GET_SYLLABUS_DATA } from "./types";

export const getSkillsData=(value)=>{
    return{
        type: GET_SKILLS_DATA,
        value
    }
}

export const getSkillsSyllabus=(value)=>{
    return{
        type: GET_SYLLABUS_DATA,
        value
    }
}
export const actions ={
    getSkillsData,
    getSkillsSyllabus
}