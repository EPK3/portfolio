import React from 'react'
import topshelf from '../img/topshelfbrowser.webp'
import helptech from '../img/helptechbrowser.webp'
import mknewsletter from '../img/newsletterbrowser.webp'
import iptracker from '../img/trackerbrowser.webp'

const Portfolio = () => {
  return (
    <div className='flex flex-col my-20'>
        <div className='flex justify-center m-auto mb-20'>
            <h1 className='text-8xl text-center text-gray font-oswald'>PORTFOLIO</h1>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={topshelf} alt='Something went wrong..' className='w-[400px]'/>
          </div>
          <div className='w-[400px]'>
            <h1 className='py-2 text-xl'>TopShelf Hockey Store</h1>
          </div>
          <div className='w-[400px]'>
            <h2>Demo</h2>
            <h2>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={mknewsletter} alt='Something went wrong..' className='h-[250px]'/>
          </div>
          <div className='w-[400px]'>
            <h1 className='py-2 text-xl'>HelpTech</h1>
          </div>
          <div className='w-[400px]'>
            <h2>Demo</h2>
            <h2>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={iptracker} alt='Something went wrong..' className='w-[400px]'/>
          </div>
          <div className='w-[400px]'>
            <h1 className='py-2 text-xl'>IP Address Tracker App</h1>
          </div>
          <div className='w-[400px]'>
            <h2>Demo</h2>
            <h2>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={helptech} alt='Something went wrong..' className='w-[400px]'/>
          </div>
          <div className='w-[400px]'>
            <h1 className='py-2 text-xl'>HelpTech Website</h1>
          </div>
          <div className='w-[400px]'>
            <h2>Demo</h2>
            <h2>Source Code</h2>
          </div>
        </div>
    </div>
  )
}

export default Portfolio