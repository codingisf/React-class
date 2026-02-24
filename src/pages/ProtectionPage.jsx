import React from 'react'
import {Navigate} from 'react-router-dom'

function ProtectionPage({children}) {


    const token = localStorage.getItem("token");


    if(token === "1234"){

        return children
    }
       return <Navigate to="/login" />



}

export default ProtectionPage