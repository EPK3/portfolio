import React from 'react'
import topshelf from '../img/topshelfbrowser.webp'
import helptech from '../img/helptechbrowser.webp'
import mknewsletter from '../img/newsletterbrowser.webp'
import iptracker from '../img/trackerbrowser.webp'

const Portfolio = () => {
  return (
    <div className='flex flex-col my-20 font-oxygen'>
        <div className='flex justify-center m-auto mb-20'>
            <h1 className='text-8xl text-center text-gray font-oswald'>PORTFOLIO</h1>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={topshelf} alt='Something went wrong..' className='w-[400px] hover:scale-110'/>
          </div>
          <div className='p-2 w-[400px]'>
            <h1 className='m-2 text-xl'>TopShelf Hockey Store</h1>
            <p className='m-2 text-gray'>A mobile responsive e-commerce website built using React. I am currently building out the back-end to help learn node.js, complete it's functionality, and to make this my first full-stack project!</p>
          </div>
          <div className='flex flex-col m-auto justify-center content-center w-[400px] border-l-[1px] border-light-gray'>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Demo</h2>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-l-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={mknewsletter} alt='Something went wrong..' className='h-[250px] hover:scale-110'/>
          </div>
          <div className='p-2 w-[400px]'>
            <h1 className='m-2 text-xl'>MK Marine Newsletter</h1>
            <p className='m-2 text-gray'>A pure HTML & CSS monthly e-mail newsletter.</p>
          </div>
          <div className='flex flex-col m-auto justify-center content-center w-[400px] border-l-[1px] border-light-gray'>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Demo</h2>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={iptracker} alt='Something went wrong..' className='w-[400px] hover:scale-110'/>
          </div>
          <div className='p-2 w-[400px]'>
            <h1 className='m-2 text-xl'>IP Address Tracker App</h1>
            <p className='m-2 text-gray'>An IP address tracker built using React. This project was built using IP Geo API to gather IP address information and Mapbox API to display the map.</p>
          </div>
          <div className='flex flex-col m-auto justify-center content-center w-[400px] border-l-[1px] border-light-gray'>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Demo</h2>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Source Code</h2>
          </div>
        </div>
        <div className='flex flex-row m-auto shadow-md rounded-md my-10 p-2 bg-[#fdfdfd] border-l-2 border-orange'>
          <div className='flex justify-center w-[400px]'>
            <img src={helptech} alt='Something went wrong..' className='w-[400px] hover:scale-110'/>
          </div>
          <div className='p-2 w-[400px]'>
            <h1 className='m-2 text-xl'>HelpTech Website</h1>
            <p className='m-2 text-gray'>A mobile responsive IT Solutions website built using React and styled with Tailwind CSS.</p>
          </div>
          <div className='flex flex-col m-auto justify-center content-center w-[400px] border-l-[1px] border-light-gray'>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Demo</h2>
            <h2 className='m-auto my-2 text-orange font-bold border-2 border-orange rounded-full px-5 py-2 text-lg hover:cursor-pointer hover:bg-orange hover:text-white'>Source Code</h2>
          </div>
        </div>
    </div>
  )
}

export default Portfolio