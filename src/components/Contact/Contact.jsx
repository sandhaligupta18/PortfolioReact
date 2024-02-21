import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h5261nb', 'template_9zcl5be', form.current, '4UbFIIFr9jntGFp3E')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('E-mail sent!');
            }, (error) => {
                console.log(error.text);
            }
        );
    };


  return (
    <div id='contact'  className=' pb-12 lg:h-[42rem] lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]'>
        <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Get in Touch</h1>
       <div className='flex lg:flex-row flex-col-reverse gap-5 justify-around mt-28 mx-9'>
<div className='flex flex-col items-center lg:items-start'>
    
    <h1 className='text-white text-2xl font-semibold '>ADDRESS</h1>
    <div className='flex flex-col items-center lg:items-start gap-5 mt-5 text-white text-lg font-normal' >
    <div>Meerut, UP</div>
    <div className='flex flex-col gap-3 items-center lg:items-start  '>
    <div className='flex gap-2 items-center'>
    <FaPhoneAlt className='text-[#F7B900]' /> 
    <p>94758470540</p>
    </div>
    <div className='flex gap-2 items-center'>
    <IoMdMail className='text-[#F7B900]' />    
    <p>sandhaligupta18@gmail.com</p>
    </div>
        <p className='text-[#f5e6c5] lg:text-start text-center '>"I'm thrilled to be on this journey of innovation and discovery, and I'm excited to connect, collaborate, and create something amazing together."</p>
    </div>
    <div className='flex flex-col lg:items-start justify-center items-center'>
        <h1 className='text-white text-2xl '>Follow Me</h1>
        <div className='flex flex-row mt-5 gap-5'> 
        <a href="https://linkedin.com/in/sandhali-gupta-82470325a" rel='noreferrer' target='_blank'><FaLinkedin className='text-xl  text-[#909294] hover:text-[#3B5998]' /></a>
                 <a href="https://twitter.com/SandhaliG93439" rel='noreferrer' target='_blank'><FaXTwitter className='text-xl  text-[#909294] hover:text-[#3CAEDB]'/></a>
                 <a href="https://github.com/sandhaligupta18" rel='noreferrer' target='_blank'><FaGithub className='text-xl  text-[#909294] hover:text-[#31363b] ' /></a>
                 <a href="https://www.instagram.com/sandhaligupta/" rel='noreferrer' target='_blank'><FaInstagram className='text-xl text-[#909294] hover:text-[#C74784] ' /></a>

        </div>
    </div>
    </div>
</div>
<div>
    <h1 className='text-white text-2xl flex justify-center lg:justify-start font-semibold'>SEND ME A NOTE</h1>
    <form action="" className='flex flex-col gap-6 justify-center items-center mt-5' ref={form} onSubmit={sendEmail}>
    <div className='flex gap-6 lg:flex-row flex-col md:flex-row'>
    <input name="user_name"  className='bg-[#343A40] border-none focus:shadow-md  focus:shadow-blue-600  focus:outline outline-offset-0 outline-blue-600 rounded text-lg text-white  h-12 w-80 p-4' type="text" placeholder='Name' />
    <input name="user_email" className='bg-[#343A40] border-none focus:shadow-md  focus:shadow-blue-600  focus:outline outline-offset-0 outline-blue-600 rounded text-lg text-white h-12 w-80 p-4' type="text" placeholder='Email' />
    </div>
    <input  name="message" className='bg-[#343A40]  rounded text-lg  h-40 w-full md:w-[41.5rem] lg:w-full p-4 border-none focus:shadow-md  focus:shadow-blue-600  focus:outline outline-offset-0 outline-blue-600 text-white text-start ' type="text" placeholder='Tell us more about your needs here......' />
    <button className='bg-[#F7B900] h-14 w-56 rounded-full text-white font-semibold  '>Send Message</button>
    </form>


</div>

       </div>


    </div>
  )
}

export default Contact
