import React from 'react'
import Image from 'next/image'
import Aw2 from '@/app/resources/aw2.svg'
import Link from 'next/link'

const component2 = () => {
  return (
    <div>
        <div className="grid min-h-1/2 grid-cols-1 xl:grid-cols-2 bg-black">
          <div className="grid">
            <div className="flex items-start justify-between">
              <div className='grid items-center justify-center'>                
                <Link href="https://artsgoz.netlify.app/" target="_blank">
                  <Image src={Aw2} alt='Test-img' className='grayscale-0 hover:grayscale hover:cursor-pointer w-screen'></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid items-center">
              <div className='grid mx-10 my-10'>
                <p className='font-mono font-bold text-blue-500'>in progress</p>
                <a className="font-mono xl:text-6xl text-4xl text-[#f2f2f2] underline-thickness-1 underline-offset-4 hover:underline 
                cursor-pointer" href='https://github.com/dhanavadh/JP-TH-Dictionary' target='_blank'>Japanese–Thai Dictionary</a>
                <p className="font-mono xl:text-lg text-md text-[#f2f2f2]">a personal experiment aiming to create a Japanese–Thai Dictionary with Golang.</p>    
                <div>
                  <p className="font-mono mt-6 font-bold xl:text-2xl text-xl text-[#f2f2f2]">Links</p>    
                  <a className="font-mono xl:text-lg text-md text-[#f2f2f2] 
                  underline-thickness-1 underline-offset-4 hover:underline 
                  cursor-pointer" href="https://github.com/dhanavadh/JP-TH-Dictionary" 
                  target="_blank">Git Repo</a> 
                </div>
                <div>
                  <p className="font-mono mt-6 font-bold xl:text-2xl text-xl text-[#f2f2f2]"><a className='text-mono text-pink-500 pr-1'>*</a>Notes</p>    
                  <a className="font-mono xl:text-lg text-md text-[#f2f2f2]" href="https://github.com/dhanavadh/JP-TH-Dictionary" 
                  target="_blank">Please note that this project is still in progress. You may only see the dataset of the dictionary.</a> 
                </div>
                     
              </div>                                                
            </div>                 
        </div>
    </div>
  )
}

export default component2