import React from 'react'
import photo from '../img/placeholder.webp'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div id='about' className='flex flex-col py-20'>
        <div className='flex justify-center m-auto mb-10'>
            <Fade top>
                <h1 className='text-6xl md:text-8xl text-center text-gray font-oswald'>ABOUT ME</h1>
            </Fade>
        </div>
        <div className='md:inline-flex flex-wrap justify-center m-auto'>
            <div className='flex md:justify-center m-auto md:mx-5'>
                <Fade left>
                    <img src={photo} alt='Something went wrong..' className='w-[350px] md:w-[600px]'/>
                </Fade>
            </div>
            <div className='flex flex-col m-auto mx-5 md:w-[600px]'>
                <Fade right>
                    <h2 className='text-2xl text-orange font-oxygen font-normal my-3'>Let Me Introduce Myself.</h2>
                    <p className='text-lg text-gray font-light mb-3'>Hello, World! I’m Edward.  My love for front-end and web development started in middle-school when I would build websites for my friends skateboarding videos and punk rock bands using Adobe Dreamweaver. After spending many years working in middle management I made the decision to pivot into a career in coding and IT Solutions. During that time I rekindled my childhood passion and haven’t looked back since. I am eager to learn and grow on my path as a front-end / web developer!</p>
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
                </Fade>
            </div>
        </div>
        
    </div>
  )
}

export default About