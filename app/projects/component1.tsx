import React from 'react'
import Image from 'next/image'
import ArtsgozImg from '@/app/resources/artsgoz_scr.png'
import Link from 'next/link'

const component1 = () => {
  return (
    <div>
        <div className="grid min-h-1/2 grid-cols-1 xl:grid-cols-2 bg-[#f2f2f2]">
          <div className="grid">
            <div className="flex items-start justify-between">
              <div>                
                <Link href="https://artsgoz.netlify.app/" target="_blank">
                  <Image src={ArtsgozImg} alt='Test-img' className='grayscale-0 hover:grayscale hover:cursor-pointer'></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid items-center">
              <div className='grid mx-10 my-10'>
                <p className='font-mono font-bold text-pink-500'>completed</p>
                <a className="font-mono xl:text-6xl text-4xl text-black underline-thickness-1 underline-offset-4 hover:underline 
                cursor-pointer" href='https://artsgoz.netlify.app/' target='_blank'>Artsgoz Website</a>
                <a className="font-mono xl:text-2xl text-xl text-black 
                underline-thickness-1 underline-offset-4 hover:underline 
                cursor-pointer" href="https://www.arts.chula.ac.th/" 
                target="_blank">@Faculty of Arts, Chulalongkorn University</a>       
                <p className="font-mono xl:text-lg text-md text-black">a commercial project distributed by Arts Student Committee, joined as a <b className='bg-pink-500 text-white'>full-stack</b> contributor</p>    
                <div>
                  <p className="font-mono mt-6 font-bold xl:text-2xl text-xl text-black">Skill used in this projects</p>    
                  <p className="font-mono xl:text-lg text-md text-black">Next.js, TailwindCSS, Express.js, AWS S3, mongoDB</p>  
                </div>  
                <div>
                  <p className="font-mono mt-6 font-bold xl:text-2xl text-xl text-black">Links</p>    
                  <a className="font-mono xl:text-lg text-md text-black 
                  underline-thickness-1 underline-offset-4 hover:underline 
                  cursor-pointer" href="https://github.com/dhanavadh/Artsgoz-frontend" 
                  target="_blank">Git Repo</a> 
                  <a className='font-mono text-lg mr-4 text-black'>,</a>
                  <a className="font-mono text-lg text-black 
                  underline-thickness-1 underline-offset-4 hover:underline 
                  cursor-pointer" href="https://www.arts.chula.ac.th/goz/" 
                  target="_blank">Homepage</a> 
                </div>
                     
              </div>                                                
            </div>                 
        </div>
    </div>
  )
}

export default component1