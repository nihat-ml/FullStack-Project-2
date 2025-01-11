import React from 'react'

import { Outlet } from 'react-router'
import UserNavbar from '../../Components/UserNavbar'
import UserFooter from '../../Components/UserFooter'

function UserRoot() {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
        <UserFooter/>
    </>
  )
}

export default UserRoot