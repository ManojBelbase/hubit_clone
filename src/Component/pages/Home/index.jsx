import React from 'react'
import Home2nd from './Home2nd'
import Home from './Home'
import Welcome from './Welcome'
import PopularCourse from './PopularCourse'
import Choose from './Choose'
// import Reviews from './Reviews'

const index = () => {
  return (
    <div className=''>
        <Home/>
        <Home2nd/>
        <Welcome/>
        <PopularCourse/>
        <Choose/>
        {/* <Reviews/> */}
    </div>
  )
}

export default index