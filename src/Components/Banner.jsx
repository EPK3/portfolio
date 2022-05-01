import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faIdCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import banner from '../img/banner-background.webp'
import headshot from '../img/headshot.webp'
import { HashLink as Link } from 'react-router-hash-link'

const Banner = () => {
  return (
    <div id='top' style={{ backgroundImage: `url('${banner}')` }} className='h-screen bg-cover bg-bottom flex flex-col justify-center content-center'>
      <div className='m-auto animate-FadeIn'>
        <img src={headshot} alt='Something went wrong..' className='w-[250px] m-auto my-5' />
        <h1 className='text-4xl md:text-5xl text-center font-cursive text-white m-auto mb-5 rotate-[355deg]'>- Edward Krajewski III -</h1>
        <h2 className=' text-xl md:text-2xl text-center font-oxygen font-light text-white m-auto'>Front-End / Web Developer</h2>
        <div className='flex m-auto p-5 text-2xl md:text-4xl text-white justify-center opacity-50'>
          <Link id='toAbout' smooth to='#about'>
            <FontAwesomeIcon icon={faIdCard} className='mx-5 cursor-pointer hover:animate-spin-fast' />
          </Link>
          <Link id='toResume' smooth to='#resume'>
            <FontAwesomeIcon icon={faGraduationCap} className='mx-5 cursor-pointer hover:animate-spin-fast' />
          </Link>
          <Link id='toResume' smooth to='#portfolio'>
            <FontAwesomeIcon icon={faLaptopCode} className='mx-5 cursor-pointer hover:animate-spin-fast' />
          </Link>
          <a href='https://github.com/EPK3/' id='toGithub' target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithub} className='mx-5 cursor-pointer hover:animate-spin-fast' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner