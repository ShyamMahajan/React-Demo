import React, { useState,useEffect } from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';
import StyleWrapper from './users.style';
import UserForm from '../Components/Users/UserForm'
import { addUser,editUser } from '../Apis'

const UserEdit = (props) => {

    const [editedData,setEditedData] = useState(props.location.state)

    const hasParam = props.match.params.hasOwnProperty("id");

    useEffect(() => {
        if(hasParam) {
            setEditedData(props.location.state)
        }
    },[hasParam,props.location.state])

    const submitHandler = (action,data) => {
        console.log("Submit DAta",action,data)
        if(action === "add"){
            addUser(data).then(res => {
                props.history.push("/users")
            })
        }else{
            editUser(data,props.match.params.id).then(res => {
                if(res){
                    props.history.push("/users")
                }else{
                    console.log("Err",res)
                }
            })
            
        }
    }
    return <StyleWrapper>
        <PageTitle title="User"></PageTitle>
        <UserForm 
            {...props} 
            editedData={editedData} 
            action={hasParam ? "edit" : "add"}
            submitHandler = {submitHandler}    
            />
    </StyleWrapper>
}

export default UserEdit