import React, {useState} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux/actions";


const mapDispatchToProps = (dispatch)=>{
  return {
      actionsOperation : bindActionCreators(actions, dispatch)
  }
}

const LogIn = ({actionsOperation:{login, createAccount}})=>{
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

    return(
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Account</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input value={user} onChange={(event)=>{setUser(event.target.value)}} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input value={pass} onChange={(event)=>{setPass(event.target.value)}}type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
        </div>
        <div className="modal-footer">
            <button className="btn btn-link" type="button" onClick={()=>{createAccount({user, pass}); setPass(""); setUser("");}} >Create account</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={()=>{login({user, pass}); setPass(""); setUser("");}} type="button" className="btn btn-primary" data-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default connect(null, mapDispatchToProps)(LogIn);