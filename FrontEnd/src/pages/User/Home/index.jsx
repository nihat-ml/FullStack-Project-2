import React from 'react'
import UserHero from '../../../Components/UserHero'
import UserBlog from '../../../Components/UserBlog'
import UserBestServices from '../../../Components/UserBestServices'
import Members from '../Members'

function Home() {
  return (
    <>
      <UserHero/>
      <UserBlog/>
      <UserBestServices/>
      <Members/>
    </>
  )
}

export default Home
