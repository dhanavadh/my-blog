import React from 'react'
import Exp1 from './exp1'

const page = () => {
  return (
    <div>
        <div className='grid bg-black'>
        <p className='mt-64 xl:text-7xl text-5xl font-mono text-[#f2f2f2] object-none object-left-bottom'>
          <a className='text-blue-500 font-mono mx-2'>*</a>Experience
        </p>
      </div>
      <div className='min-h-screen bg-[#f2f2f2]'>
        <Exp1 />
      </div>
    </div>
  )
}

export default page