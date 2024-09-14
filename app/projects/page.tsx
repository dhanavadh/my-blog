import React from 'react'
import Component1 from './component1'
import Component2 from './component2'


const projects = () => {
  return (
    <div>
      <div className='grid bg-black font-mono text-7xl text-[#f2f2f2]'>
        <a className='mt-64 object-none object-left-bottom'>
          Projects
        </a>
      </div>
      <Component1 />
      <Component2 />
      
    </div>
  )
}

export default projects