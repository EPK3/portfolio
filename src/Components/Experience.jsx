import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faAward, faBriefcase, faRobot, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import comptia from '../img/comptia.webp'
import googleIT from '../img/googleIT.webp'
import htmlIcon from '../img/html-1.webp'
import cssIcon from '../img/css.webp'
import jsIcon from '../img/javascript.webp'
import reactIcon from '../img/react.webp'
import tailwindIcon from '../img/tailwind.webp'
import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center m-auto bg-[#ebebeb]'>
        <div className='flex justify-center m-auto my-20'>
            <h1 className='text-8xl text-center text-gray font-oswald'>MY RESUME</h1>
        </div>
          <div className='flex flex-wrap justify-center mb-20'>
            <div className='w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
              <FontAwesomeIcon icon={faRobot} className='inline-flex align-middle ml-5 mr-2'/>
              <h1 className='inline-flex align-middle'>Skillset</h1>
            </div>
            <div className='flex basis-full m-5'></div>
            <img src={htmlIcon} alt='Something went wrong..' className='w-[250px] h-[250px] mx-5 bg-white rounded-full shadow-md p-1'/>
            <img src={cssIcon} alt='Something went wrong..' className='w-[250px] h-[250px] mx-5 bg-white rounded-full shadow-md p-1'/>
            <img src={jsIcon} alt='Something went wrong..' className='w-[250px] h-[250px] mx-5 bg-white rounded-full shadow-md p-1'/>
            <img src={reactIcon} alt='Something went wrong..' className='w-[250px] h-[250px] mx-5 bg-white rounded-full shadow-md p-1'/>
            <img src={tailwindIcon} alt='Something went wrong..' className='w-[250px] h-[250px] mx-5 bg-white rounded-full shadow-md p-1'/>
          </div>
        <div className='basis-full'></div>
        <div className='flex flex-row flex-wrap justify-center gap-5'>
          <div className='mx-10'>
            <div className='w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
              <FontAwesomeIcon icon={faUserGraduate} className='inline-flex align-middle ml-5 mr-2'/>
              <h1 className='inline-flex align-middle'>Education</h1>
            </div>
            <div className='w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <div className='p-5 pb-2 text-black text-sm'>
                <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                <h1 className='inline-flex mx-2'>January 2020 - PRESENT</h1>
              </div>
              <h2 className='px-5 text-xl text-orange'>Associate of Science: Cybersecurity</h2>
              <h3 className='px-5 text-gray'>Bucks County Community College</h3>
              <h3 className='px-5 text-light-gray'>Newtown, PA</h3>
            </div>
            <div className='w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
            <div className='p-5 pb-2 text-black text-sm'>
                <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                <h1 className='inline-flex mx-2'>June 2008</h1>
              </div>
              <h2 className='px-5 text-xl text-orange'>High School Diploma</h2>
              <h3 className='px-5 text-gray'>Central Bucks High School East</h3>
              <h3 className='px-5 text-light-gray'>Holicong, PA</h3>
            </div>
          </div>
          <div className='mx-10'>
            <div className='w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
              <FontAwesomeIcon icon={faBriefcase} className='inline-flex align-middle ml-5 mr-2'/>
              <h1 className='inline-flex align-middle'>Experience</h1>
            </div>
            <div className='w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <div className='p-5 pb-2 text-black text-sm'>
                <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                <h1 className='inline-flex mx-2'>September 2012 - March 2020</h1>
              </div>
              <h2 className='px-5 text-xl text-orange'>Operations Manager</h2>
              <h3 className='px-5 text-gray'>KAHAR, LLC</h3>
              <h3 className='px-5 text-light-gray'>Boulder, CO</h3>
            </div>
            <div className='w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <div className='p-5 pb-2 text-black text-sm'>
                <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                <h1 className='inline-flex mx-2'>August 2011 - August 2012</h1>
              </div>
              <h2 className='px-5 text-xl text-orange'>Associate Manager</h2>
              <h3 className='px-5 text-gray'>Bagels Over Broadway</h3>
              <h3 className='px-5 text-light-gray'>West Chester, PA</h3>
            </div>
            <div className='w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <div className='p-5 pb-2 text-black text-sm'>
                <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                <h1 className='inline-flex mx-2'>June 2010 - August 2011</h1>
              </div>
              <h2 className='px-5 text-xl text-orange'>General Manager</h2>
              <h3 className='px-5 text-gray'>SaladWorks</h3>
              <h3 className='px-5 text-light-gray'>Warrington, PA</h3>
            </div>
          </div>
          <div className='mx-10'>
            <div className='w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
              <FontAwesomeIcon icon={faAward} className='inline-flex align-middle ml-5 mr-2'/>
              <h1 className='inline-flex align-middle'>Certifications</h1>
            </div>
            <div className='flex justify-center w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <img src={comptia} alt='Something went wrong..' className='h-[200px]'/>
            </div>
            <div className='flex justify-center w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
              <img src={googleIT} alt='Something went wrong..' className='h-[200px]'/>
            </div>
          </div>
          <div className='flex basis-full mb-20'></div>
        </div>
    </div>
  )
}

export default Experience