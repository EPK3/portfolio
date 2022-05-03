import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React, {useState} from 'react'
import { Fade } from 'react-reveal'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_6p7rjis';
            const templateId = 'template_yfs01dl';
            const userId = 'REww9IdCXgh7h3x0f';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            alert('Thank you for your message!');
        } else {
            alert('Please fill in all fields.');
        }
    }

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
                    </Fade>
                    <Fade bottom>
                        <form className='flex flex-col my-10 w-[350px] md:w-[400px] lg:w-[800px]'>
                            <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} className='h-12 border-b-[1px] border-light-gray p-2 text-lg outline-none rounded-t-lg shadow-md' />
                            <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='h-12 border-b-[1px] border-light-gray p-2 text-lg outline-none shadow-md' />
                            <textarea type='text' placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)} className='h-64 p-2 text-lg outline-none rounded-b-lg shadow-md' />
                            <input onClick={submit} value='Send Message' className='bg-orange h-12 rounded-lg text-center text-xl text-white my-2 shadow-md cursor-pointer outline-none'/>
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Contact