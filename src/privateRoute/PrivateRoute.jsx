import React from 'react'
import { Navigate } from 'react-router-dom'
//for private routing of createemp and allemp ki bina login huwe wo dono page na khule


const PrivateRoute = (props) => {

    let token = sessionStorage.getItem("accessToken")

  return token ? props.children : <Navigate to="/"/>
}

export default PrivateRoute


