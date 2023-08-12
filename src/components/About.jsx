import React from 'react'
import { Tilt } from 'react-tilt'
import { motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas'

const ServiceCard = ({ index, title, icon }) => (
  
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div varients = {textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h3 className={styles.sectionHeadText}>
        Overview.
      </h3>
      </motion.div>

      <motion.p
      variants={fadeIn(" "," ",0.1,1)}
      className='mt-4 text-secondary text-[15px] max-w-6xl leading-[30px] text-justify'
      >
      I am a dynamic security enthusiast with a strong foundation in incident response and compliance. Passionate and committed cybersecurity professional with a solid grasp on threat analysis, risk mitigation and security controls. I am proficient in network analysis, incident response and system hardening. I have hands on experience with SIEM tools, Microsoft defender, Firewall and Active Directory. I am attentive to every little detail and open to collaborate with other teams with very effective communication skills. I look forward to contributing to the field in safeguarding organizational assets and improving their security posture. 
      Eagar to keep learning, staying up to date with ever changing landscape of security and industry standards. The following are the roles that I think I would be perfect for:
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={`service-${service.title}-${index}`} index={index} {...service} />

        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about" )