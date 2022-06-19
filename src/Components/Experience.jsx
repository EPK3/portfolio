import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAward, faBriefcase, faRobot, faUserGraduate, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import comptia from '../img/comptia.webp';
import googleIT from '../img/googleIT.webp';
import htmlIcon from '../img/html-1.webp';
import cssIcon from '../img/css.webp';
import jsIcon from '../img/javascript.webp';
import reactIcon from '../img/react.webp';
import tailwindIcon from '../img/tailwind.webp';
import npmIcon from '../img/npm.webp';
import sassIcon from '../img/sass.webp';
import reduxIcon from '../img/redux.webp';
import mockPlusIcon from '../img/mockplus.webp';

import React from 'react'
import { Fade } from 'react-reveal'

const Experience = () => {
  return (
    <div id='resume' className='flex flex-col justify-center m-auto bg-[#ebebeb] font-oxygen'>
        <div className='flex justify-center m-auto my-20'>
          <Fade top>
            <h1 className='text-6xl md:text-8xl text-center text-gray font-oswald'>MY RESUME</h1>
          </Fade>
        </div>
          <div className='flex flex-wrap justify-center mb-20'>
            <Fade left>
              <div className='w-[350px] md:w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
                <FontAwesomeIcon icon={faRobot} className='inline-flex align-middle ml-5 mr-2'/>
                <h1 className='inline-flex align-middle'>Skillset</h1>
              </div>
            </Fade>
            <div className='flex basis-full m-5'></div>
            <Fade right>
              <img src={htmlIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={cssIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={jsIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={reactIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={reduxIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={tailwindIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={npmIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={sassIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
              <img src={mockPlusIcon} alt='Something went wrong..' className='w-[100px] md:w-[250px] h-[100px] md:h-[250px] m-5 bg-white rounded-full shadow-md p-1'/>
            </Fade>
          </div>
        <div className='basis-full'></div>
        <div className='flex md:flex-row flex-wrap justify-center gap-5'>
          <div className='md:mx-10'>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
                <FontAwesomeIcon icon={faUserGraduate} className='inline-flex align-middle ml-5 mr-2'/>
                <h1 className='inline-flex align-middle'>Education</h1>
              </div>
            </Fade>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <div className='p-5 pb-2 text-black text-sm'>
                  <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                  <h1 className='inline-flex mx-2'>January 2020 - PRESENT</h1>
                </div>
                <h2 className='px-5 text-xl text-orange'>Associate of Science: Cybersecurity</h2>
                <h3 className='px-5 text-gray'>Bucks County Community College</h3>
                <h3 className='px-5 text-light-gray'>Newtown, PA</h3>
              </div>
            </Fade>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <div className='p-5 pb-2 text-black text-sm'>
                  <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                  <h1 className='inline-flex mx-2'>June 2008</h1>
                </div>
                <h2 className='px-5 text-xl text-orange'>High School Diploma</h2>
                <h3 className='px-5 text-gray'>Central Bucks High School East</h3>
                <h3 className='px-5 text-light-gray'>Holicong, PA</h3>
              </div>
            </Fade>
          </div>
          <div className='mx-10'>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
                <FontAwesomeIcon icon={faBriefcase} className='inline-flex align-middle ml-5 mr-2'/>
                <h1 className='inline-flex align-middle'>Experience</h1>
              </div>
            </Fade>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <div className='p-5 pb-2 text-black text-sm'>
                  <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                  <h1 className='inline-flex mx-2'>December 2021 - PRESENT</h1>
                </div>
                <h2 className='px-5 text-xl text-orange'>Freelance Developer</h2>
                <h3 className='px-5 text-light-gray'>Jamison, PA</h3>
              </div>
            </Fade>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <div className='p-5 pb-2 text-black text-sm'>
                  <FontAwesomeIcon icon={faCalendar} className='inline-flex'/>
                  <h1 className='inline-flex mx-2'>September 2012 - March 2020</h1>
                </div>
                <h2 className='px-5 text-xl text-orange'>Operations Manager</h2>
                <h3 className='px-5 text-gray'>KAHAR, LLC</h3>
                <h3 className='px-5 text-light-gray'>Boulder, CO</h3>
              </div>
            </Fade>
          </div>
          <div className='mx-10'>
            <Fade bottom>
              <div className='w-[350px] md:w-[400px] bg-orange text-white text-2xl rounded-md my-5 py-2 shadow-md'>
                <FontAwesomeIcon icon={faAward} className='inline-flex align-middle ml-5 mr-2'/>
                <h1 className='inline-flex align-middle'>Certifications</h1>
              </div>
            </Fade>
            <Fade bottom>
              <div className='flex justify-center w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <img src={comptia} alt='Something went wrong..' className='h-[200px]'/>
              </div>
            </Fade>
            <Fade bottom>
              <div className='flex justify-center w-[350px] md:w-[400px] h-[200px] bg-white rounded-md my-5 shadow-md'>
                <img src={googleIT} alt='Something went wrong..' className='h-[200px]'/>
              </div>
            </Fade>
          </div>
          <div className='flex basis-full mb-10'></div>
        </div>
        <div className='flex justify-center m-auto mb-20'>
        <Fade bottom>
          <button className='bg-orange py-2 px-5 text-white rounded-full'><a href='/EPK3Resume.pdf' id='resumeDownload' download><FontAwesomeIcon icon={ faDownload } /> Resume</a></button>
          </Fade>
        </div>
    </div>
  )
}

export default Experience