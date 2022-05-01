
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faGraduationCap, faIdCard, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='hidden lg:flex flex-col p-5 fixed justify-center content-center h-screen m-auto text-center text-white z-50' >
      <div className='flex flex-col bg-orange p-2 rounded-lg shadow-md'>
        <Link id='navToTop' aria-label='topOfPage' smooth to='#top'>
          <FontAwesomeIcon icon={faArrowUp} className='text-2xl my-2 hover:cursor-pointer hover:scale-110' />
        </Link>
        <Link id='navToAbout' aria-label='about' smooth to='#about'>
          <FontAwesomeIcon icon={faIdCard} className='text-2xl my-2 hover:cursor-pointer hover:scale-110' />
        </Link>
        <Link id='navToResume' aria-label='resume' smooth to='#resume'>
          <FontAwesomeIcon icon={faGraduationCap} className='text-2xl my-2 hover:cursor-pointer hover:scale-110' />
        </Link><Link id='navToPortfolio' aria-label='portfolio' smooth to='#portfolio'>
          <FontAwesomeIcon icon={faLaptopCode} className='text-2xl my-2 hover:cursor-pointer hover:scale-110' />
        </Link><a href='https://github.com/EPK3/' id='navToGithub' aria-label='Github' target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faGithub} className='text-2xl my-2 hover:cursor-pointer hover:scale-110' />
        </a>
      </div>
    </div>
  )
}

export default Navbar