import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { Fade } from 'react-reveal'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className='flex m-auto py-20 bg-[#ebebeb] font-oxygen'>
            <div className='flex flex-col justify-center m-auto'>
                <Fade top>
                    <h1 className='text-6xl md:text-8xl text-center text-gray font-oswald'>CONTACT</h1>
                </Fade>
                <div className='flex flex-col justify-center m-auto my-20'>
                    <Fade right>
                        <h1 className='text-4xl text-orange text-center'>Let me hear from you.</h1>
                        <div className='mt-5 m-auto text-gray'>
                            <FontAwesomeIcon icon={faEnvelope} className='inline-flex text-2xl align-middle' />
                            <h2 className='inline-flex mx-2 align-middle'>edward@epk3.net</h2>
                        </div>
                        <div className='m-auto text-gray'>
                            <FontAwesomeIcon icon={faMobileAlt} className='inline-flex text-2xl align-middle' />
                            <h2 className='inline-flex mx-2 align-middle'>(123)456-7890</h2>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <form action='mail.php' method='POST' className='flex flex-col my-10 w-[350px] md:w-[400px] lg:w-[800px]'>
                            <input type='text' id='name' placeholder='Name' className='h-12 border-b-[1px] border-light-gray p-2 text-lg outline-none rounded-t-lg shadow-md' />
                            <input type='text' id='email' placeholder='Email' className='h-12 border-b-[1px] border-light-gray p-2 text-lg outline-none shadow-md' />
                            <textarea type='text' id='message' placeholder='Your Message' className='h-64 p-2 text-lg outline-none rounded-b-lg shadow-md' />
                            <input type='submit' value='Send Message' className='bg-orange h-12 rounded-lg text-xl text-white my-2 shadow-md' />
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Contact