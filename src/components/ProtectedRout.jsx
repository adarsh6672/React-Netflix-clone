import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const ProtectedRout = ({children}) => {
const {user} = UserAuth();

    if(!user) {
        return <Navigate to='/'/>;
    }else {
        return children
    }

  return (
    <div>ProtectedRout</div>
  )
}
