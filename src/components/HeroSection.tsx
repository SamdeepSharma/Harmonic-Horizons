import React from 'react'
import { Button } from './ui/moving-border'
import { Spotlight } from './ui/Spotlight'

const HeroSection = () => {
     return (
          <div className='min-h-screen w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0'>
               <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
               />
               <div className='p-5 relative z-10 w-full text-center'>
                    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Music</h1>
                    <p className='mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into comprehensive music courses and transform your music journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                    <div className='mt-5 dark'>
                         <Button
                              borderRadius="1.75rem"
                              className="bg-black dark:bg-black dark:hover:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800">
                              Explore courses
                         </Button>
                    </div>
               </div>
          </div>
     )
}

export default HeroSection