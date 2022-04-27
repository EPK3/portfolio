import React from 'react'
import photo from '../img/placeholder.webp'

const About = () => {
  return (
    <div className='flex flex-col my-20'>
        <div className='flex justify-center m-auto mb-10'>
            <h1 className='text-8xl text-center text-light-gray opacity-50 font-oxygen font-bold'>ABOUT ME</h1>
        </div>
        <div className='inline-flex justify-center m-auto'>
            <div className='flex justify-center m-auto mx-5'>
                <img src={photo} alt='Something went wrong..' className='w-[600px]'/>
            </div>
            <div className='flex flex-col m-auto mx-5 w-[600px]'>
                <h2 className='text-2xl text-orange font-oxygen font-normal my-3'>Let Me Introduce Myself.</h2>
                <p className='text-lg text-gray font-light mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <ul>
                    <li className='inline-flex text-black text-lg font-normal'>From:</li>
                    <p className='inline-flex text-gray text-lg font-light mx-2'>Philadelphia, PA</p>
                    <div className='flex'></div>
                    <li className='inline-flex text-black text-lg font-normal'>Lives In:</li>
                    <p className='inline-flex text-gray text-lg font-light mx-2'>Jamison, PA</p>
                    <div className='flex'></div>
                    <li className='inline-flex text-black text-lg font-normal'>Pronouns:</li>
                    <p className='inline-flex text-gray text-lg font-light mx-2'>He, Him</p>
                    <div className='flex'></div>
                    <li className='inline-flex text-black text-lg font-normal'>Age:</li>
                    <p className='inline-flex text-gray text-lg font-light mx-2'>31</p>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default About