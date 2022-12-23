import React from 'react'
import Header from './Header';
import Second from './Second';

const index = () => {
  return (
    <div className='fixed top-0 w-screen  z-50 bg-white mb-3'>
      <Header/>
        <Second/>
    </div>
  )
}

export default index;