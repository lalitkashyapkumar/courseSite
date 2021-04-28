import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/actions";
import { Link } from "react-router-dom";
import { YoutubePlayer } from "reactjs-media";

const mapStateToProps = (state)=>{
    return {
        syllabus : state.syllabus
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        actionsOperation : bindActionCreators(actions, dispatch)
    }
}

const Watch =({SyllabusId, chapterId, syllabus, actionsOperation:{getSkillsSyllabus}})=>{
    const [vpath, pathSetter] = useState("https://www.youtube.com/watch?v=Mf7f-xPOvwo");
    useEffect(()=>{
        getSkillsSyllabus(SyllabusId)
    },[]);
    
    if(Object.keys(syllabus).length===0 ){
        return (
            <>
            <h2>Loading</h2><hr/>
            {/* <Card/> */}
            </>
        );
    }else{
        
        // var vpath = ;
        
        const videoSetter = (e)=>{
            // e.preventDefault();
            pathSetter(e);
        }
        const WeekendSylby = ({week})=>{
            // console.log(week);
            const allWeekData = week.map((data, i)=>{
                return (
                <Link onClick={()=>videoSetter(data.url)} to={`/courseList/${SyllabusId}/${i}`}>
                <div key={i} className="card" >
                    <div className="card-body">
                        {data.title}
                    </div>
                </div>
                </Link>
                )
            });
            
            return(
                <div >
                    {allWeekData}
                </div>
            )
        }
        
        const Syllabus = ({sylb})=>{
            const sylbCard = sylb.map((data, i)=>{
                return <div key={i} className="card" >
                    <div className="card-body pt-1 pb-0" data-toggle="collapse" href={"#week"+i} role="button" aria-expanded="false" aria-controls={"week"+i}>
                        <p className="font-weight-bolder">{data.title}</p>                                        
                    </div>
                    <div id={"week"+i} className="collapse">
                        <WeekendSylby week={data.weekWise}/>
                    </div>
                </div>
            });
            return(
                <>
                {sylbCard}
                </>
            )
        }
        const visualizer = ()=>{
            
            var x = document.getElementById("syllabusListWatch");
            if (x.style.display === "none") {
                x.style.display = "block";
                // x.style. transition = 'max-height 0.5s, overflow 0s';
                // x.style.transitionTimingFunction = 'ease-out';
            } else {
                x.style.display = "none";
                // x.style.transitionTimingFunction = 'ease-in';
            }
        }
        const VideoPlayer = ({path})=>{
            return(<YoutubePlayer
                    src={path}
                    poster=""
                    primaryColor="red"
                    width="100%"
                    height="400em"
                    />)
        }
        return(
        <div className="mr-3">
            <div className="row">
                <div className="ml-2 navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" onClick={()=> visualizer()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            <div id="syllabusListWatch" className="col-12 col-md-3 pr-0" style={{maxHeight: 'calc(100vh - 4rem)', overflow: 'auto'}}>
                <ul className="nav flex-column">
                <Syllabus sylb={syllabus["Syllabus"]}/>
                    {/* <a className="nav-link border pl-2" href="#">Active</a> */}
                    
                </ul>
            </div>
            <div className="col-12 col-md-8">
                <div className="card">
                    <div  className="card-body height">

                        <VideoPlayer path={vpath}/>

                        {/* <video width="100%" controls>
                            <source src={vpath} type="video/mp4"/>
                            Your browser does not support HTML video.
                        </video> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);