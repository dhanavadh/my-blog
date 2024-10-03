import React from 'react'
import Image from 'next/image'
import AccLogo from '@/app/resources/exp/acc_logo.png'
import MSLogo from '@/app/resources/exp/ms_logo.jpg'

const exp1 = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols bg-[#f2f2f2] text-black'>
            <div className='flex flex-col mx-5'>
                <h1 className='mx-5 mt-10 text-3xl font-mono font-bold '>Work/Internship</h1>
                <div className="flex mt-5 mx-10">
                <div className="flex-none">
                    <div className='col items-center justify-items-center'>
                        <Image src={AccLogo} alt="1" className='w-32' />
                    </div>
                </div>
                <div className="grow ml-5">
                    <p className='font-mono text-2xl font-bold'> Social Media Contact Center Agent</p>
                    <p className='font-mono text-lg'>Advanced Info Services Plc. (AIS)</p>
                    <p className='font-mono text-lg mt-2 text-pink-500 font-bold'>Part-Time with 1-year contract</p>
                    <p className='font-mono text-lg font-bold'><a className='font-mono text-pink-500'>&gt; </a>Oct 2021 - Aug 2022 · 11 mos</p>
                    <p className='font-mono text-lg mt-4'>I worked part-time as a Contact Center Agent for nearly a year, engaging with customers through the social media platforms of AIS and ACC.</p>
                </div>
                </div>
            </div>
            <div className='flex flex-col mx-5'>
                <h1 className='mx-5 mt-10 text-3xl font-mono font-bold'>Activities</h1>
                <div className="flex mt-5 mx-10">
                    <div className="flex-none">
                        <div className='col items-center justify-items-center'>
                            <Image src={MSLogo} alt="1" className='w-32' />
                        </div>
                    </div>
                    <div className="grow ml-5">
                        <p className='font-mono text-2xl font-bold'>Accessibility Hackathon 2024</p>
                        <p className='font-mono text-lg'>Microsoft ASEAN AI for Accessibility Hackathon 2024</p>
                        <p className='font-mono text-lg mt-2 text-pink-500 font-bold'>Participation</p>
                        <p className='font-mono text-lg font-bold'><a className='font-mono font-bold text-pink-500'>&gt; </a>June 12, 2024</p>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default exp1