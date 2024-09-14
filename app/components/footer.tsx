import React from 'react'

const footer = () => {
  return (
    <div className='grid bg-[#f2f2f2] text-black items-center justify-items-center'>
        <div className='flex mt-10'>
            <a className='font-mono text-xl mt-6 mx-5 underline-thickness-1 underline-offset-4 hover:underline cursor-pointer' href='https://www.linkedin.com/in/dhanav/' target='_blank'>
            &gt; LinkedIn                
            </a>            
            <a className='font-mono text-xl mt-6 mx-5 underline-thickness-1 underline-offset-4 hover:underline cursor-pointer' href='https://github.com/dhanavadh/' target='_blank'>
            &gt; GitHub
            </a>                     
        </div>
        <div className='grid mt-8 mb-6 items-center justify-items-center'>
            <p className='font-mono text-md'>
                2024 – Dhanavadh Saito
            </p>
            <p className='font-mono text-md'>
                dhanavadh@gmail.com
            </p>
        </div>
    </div>
  )
}

export default footer