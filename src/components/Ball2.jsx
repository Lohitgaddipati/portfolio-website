import React from "react";
import {

    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    chronicle,
    azure,
    tesla,
    shopify,
    carrent,
    jobit,
    splunk,
    wireshark,
    wad,
    wd,
    python,
    threejs,
  } from "../assets";
 import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Ball2 = () => {
    return(
        <section>
            <div variants = {textVariant()} >
      
      <p className={styles.sectionSubText}>
          Tools and technologies that i have work with.
        </p>
        <h3 className={styles.sectionHeadText}>
          Technologies.
        </h3>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-blue-700 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wireshark} alt="HTML icon" />
                  <p className='my-4'>Wireshark</p>
              </div>
              <div className='shadow-md shadow-green-700 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={splunk} alt="HTML icon" />
                  <p className='my-4'>Splunk</p>
              </div>
              <div className='shadow-md shadow-white rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wad} alt="HTML icon" />
                  <p className='my-4'>Windows Active directory</p>
              </div>
              <div className='shadow-md shadow-blue-500 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wd} alt="HTML icon" />
                  <p className='my-4'>Microsoft Defender and Firewall</p>
              </div>
              <div className='shadow-md shadow-blue-900 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={azure} alt="HTML icon" />
                  <p className='my-4'>Microsoft Azure</p>
              </div>
              <div className='shadow-md shadow-yellow-300 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-orange-500 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>               
              </div>
              <div className='shadow-md shadow-white rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={chronicle} alt="HTML icon" />
                  <p className='my-4'>Google Chronicle</p>
              </div>
              <div className='shadow-md shadow-sky-900 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-sky-500 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={reactjs} alt="HTML icon" />
                  <p className='my-4'>React JS</p>
              </div>
              <div className='shadow-md shadow-sky-300 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-yellow-500 rounded-xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                  <p className='my-4'>Java Script</p>
              </div>

          </div>

        
            <div>
               <button
                className='mx-auto py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-zinc-400 cursor-pointer flex flex-cols justify-center items-center mt-4'
                >
                <a href="https://www.linkedin.com/in/lohit-gaddipati-390275249">
                For More 
                </a>
            </button>
               </div>
        
        </section>
    )
}

export default SectionWrapper(Ball2, "");