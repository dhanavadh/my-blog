import React from 'react'
import Link from 'next/link'
import Exp1 from './exp1'

const page = () => {
  return (
    <div>
        <div className='grid bg-black '>
        <p className='mt-64 xl:text-7xl text-5xl font-mono text-[#f2f2f2] object-none object-left-bottom'>
          <a className='text-blue-500 font-mono mx-2'>*</a>Experience
        </p>
      </div>
      <Exp1 />
    </div>
  )
}

export default page