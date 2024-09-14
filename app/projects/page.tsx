import React from 'react'
import Component1 from './component1'
import Component2 from './component2'


const projects = () => {
  return (
    <div>
      <div className='grid bg-black '>
        <p className='mt-64 xl:text-7xl text-5xl font-mono text-[#f2f2f2] object-none object-left-bottom'>
          <a className='text-pink-500 font-mono mx-2'>*</a>Projects
        </p>
      </div>
      <Component1 />
      <Component2 />
      
    </div>
  )
}

export default projects