import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from 'react-icons/fa';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
  import { HiOutlineMail } from 'react-icons/hi';
import { SectionWrapper } from "../hoc";

const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/lohit-gaddipati-390275249',
            style: 'rounded-tr-md shadow-md shadow-blue-500',

        },
        {
            id: 2,
            child: (
                <>
                Instagram <FaInstagram size={30}/>
                </>
            ),
            href:'https:Instagram.com/lohitgaddipati',
            style: 'rounded-tr-md mt-2 shadow-md shadow-red-600',

        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:lohitcho@buffalo.edu',
            style: 'rounded-tr-md mt-2 shadow-md shadow-white',

        },
        {
            id: 4,
            child: (
                <>
                My Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'./resume.pdf',
            style: 'rounded-tr-md mt-2 shadow-md shadow-green-500',
            download: true, 

        },
    ]


    return (
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
          <ul>
            {links.map(({id, child, href, style, download})=>(
                <li
                key = {id} 
                className={'flex justify-between items-center w-40 h-10 px-4 ml-[-110px] hover:ml-[-10px] hover: rounded-md duration-300 bg-black' + " " + style}
                >
                 <a
                 href = {href}
                className='flex justify-between items-center w-full text-white'
                download={download}
                target="_blank"
                rel = "noreferrer"
                >
                    {child}
                    </a>   
                </li>

            ))}
          </ul>
     </div>
    );
};

export default SectionWrapper(Footer, "");