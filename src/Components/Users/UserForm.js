import React from 'react';
import PropTypes from 'prop-types'

import enhancer from './FormEnhancer';
import ProfileImg from '../profileImage/ProfileImage';
import Error from '../Error/error';
import {Button} from 'reactstrap';
import { FaBackward } from 'react-icons/fa'



const UserForm = (props) => {

  const getImgObj = imgObject => {
    // console.log("IMAGEOBJECT", imgObject);
    // console.log(window.URL.createObjectURL(imgObject));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit();
    if(props.isValid){
      const Data = {
        name : props.values.name,
        email : props.values.email,
        avatar : "https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg"
      }
      if(props.action === "add"){
        props.submitHandler("add",Data)
      }else{
        props.submitHandler("edit",Data)
      }
    }
  }

  return (
  <div className="table" data-test="component-userForm">
  <div className="boxheader">
    <div className="b-text" data-test = "action">
      # {props.action} User
    </div>
    <div className="Backward" onClick={() => props.history.push("/users")}>
      <FaBackward color = "#4d06ab"/><span className="b-text">Backward</span> 
    </div>

  </div>
  <form className="form">
        <div className="form-group">
          <label className="fs-16 medium-text">Name</label>
          <input
            data-test="input-name"
            type="text"
            className="form-control"
            id="name"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            placeholder="User Name"
          />
          <Error {...props} field="name" />
        </div>
        <div className="form-group">
          <label className="fs-16 medium-text">Email</label>
          <input
            data-test = "input-email"
            type="text"
            className="form-control"
            id="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            placeholder="Enter Email"
          />
          <Error {...props} field="email" />
        </div>
        <div className="form-group">
          <label className="fs-16 medium-text">Avatar</label>
          <ProfileImg
            className="text-left"
            getImgObj={getImgObj}
            url={props.values.avatar}
          />
        </div>
        <div>
          <Button
            data-test = "submit-button"
            color = "info"
            className="c-btn c-info form-button fs-16"
            style={{ maxWidth: "125px" }}
            onClick={handleSubmit}
            >
            Submit
          </Button>
        </div>
      </form>
  </div>
  
  )
}

UserForm.propTypes = {
  editedData : PropTypes.object,
  action : PropTypes.string.isRequired,
  submitHandler : PropTypes.func.isRequired
}

export default enhancer(UserForm);