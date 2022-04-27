import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faIdCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import banner from '../img/banner-background.webp'
import headshot from '../img/headshot.png'

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url('${banner}')` }} className='h-screen bg-cover bg-bottom flex flex-col justify-center content-center'>
        <div className='m-auto animate-FadeIn'>
            <img src={headshot} alt='Something went wrong..' className='w-[250px] m-auto my-5'/>
            <h1 className='text-5xl text-center font-cursive text-white m-auto mb-5 rotate-[355deg]'>- Edward Krajewski III -</h1>
            <h2 className='text-2xl text-center font-oxygen font-light text-white m-auto'>Front-End / Web Developer</h2>
            <div className='flex m-auto p-5 text-4xl text-white justify-center opacity-50'>
                <FontAwesomeIcon icon={faIdCard} className='mx-5 cursor-pointer hover:animate-spin-fast' />
                <FontAwesomeIcon icon={faGraduationCap} className='mx-5 cursor-pointer hover:animate-spin-fast'/>
                <FontAwesomeIcon icon={faLaptopCode} className='mx-5 cursor-pointer hover:animate-spin-fast'/>
                <FontAwesomeIcon icon={faGithub} className='mx-5 cursor-pointer hover:animate-spin-fast'/>
            </div>
        </div>
    </div>
  )
}

export default Banner