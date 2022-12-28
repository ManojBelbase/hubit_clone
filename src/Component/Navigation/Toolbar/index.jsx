import React from 'react'
import Header from './Header';
import Second from './Second';

const index = ({ShowSideBar}) => {
  return (
    <div className='fixed top-0 w-screen  z-50 bg-white mb-3'>
      <Header/>
        <Second ShowSideBar={ShowSideBar}/>
    </div>
  )
}

export default index;