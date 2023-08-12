import {
    mobile,
    backend,
    creator,
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    lohit,
    threejs,
    gan,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Security Analyst/ Engineer",
      icon: mobile,
    },
    {
      title: " Cybersecurity Specialist ",
      icon: web,
    },
    {
      title: "Security Administrator",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
  
    {
      title: "Cybersecurity Student",
      company_name: "University at Buffalo",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2023",
      points: [
        "The following are the few projects that I have worked on during my time at the university under the supervision of my professor",
        "Configuring and updating the Microsoft Defender and Microsoft Firewall",
        "Analyzing the TCP traffic that was captured using tcpdump",
        "Configured different groups and performed basic adminstrative tasks using Windows Active Directory",
      ],
    },

    {
      title: "Data Analyst Student",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2023",
      points: [
        "Cleaning raw training data and pre-processing it for the neural network to learn and draw conclusions",
        "I have worked on a project in which i had to clean and pre-process the data of walmart adn use it to prove my hypothosis using couple of different machine learning models",
        "Devoloped different machine learing models and Deep learing models for different kinds of Data like text, images and audio",
        "I have also worked on hadoop, apache spark, hbase",
      ],
    },

    {
      title: "Security Analyst",
      company_name: "K7 Computing | Intern",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2020 - April 2021",
      points: [
        "Developing and maintaining a firewall from scratch around the company's network.",
        "Collaborating with cross-functional teams including managers, network engineers, and other developers to know the in's and out's the network",
        "Writing rules for the firfewall based on the traffic that needs to be allowed based on different zones of company's network.",
        "Participating in the group calls and discussing the imporvements and vulnerabilities that can occur and how to approch in such cases.",
      ],
    },
    
    {
      title: "Cybersecurity Student",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2017 - August 2021",
      points: [
        "This was my first exposure that i had anything to do with the field of Cyber Security",
        "During my time here, spents years learning the basics for security like Operating Systems and how scheduling or multi threading works",
        "Networking Concepts like DNS, DHCP, TCP/IP Model, Wireless Networks and using those to improve the network security of the organization",
        "Cryptography was my fav of all. Worked a lot on different algorithms starting from simple ceaser cipher to all the way till Hashing, AES, DES and IPSec",
        "Purposed a model for detecting data breaches using AI. Along with the different signature for different malwares",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Google Cybersecurity Professional Certificate",
      description:"Learned from scratch on what go on inside an organization and how to respond.",
      tags: [
        {
          name: "security controls and frameworks",
          color: "blue-text-gradient",
        },
        {
          name: "Splunk",
          color: "green-text-gradient",
        },
        {
          name: "wireshark and tcpdump",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
    },
    {
      name: "Google I.T Support Professional Certificate",
      description:
        "From troubleshooting to administrating a system. Everything you need to know.",
      tags: [
        {
          name: "Active Directory",
          color: "blue-text-gradient",
        },
        {
          name: "troubleshooting",
          color: "green-text-gradient",
        },
        {
          name: "System Administration",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
    },
    {
      name: "Captured and Analyzed TCP traffic",
      description:
        "Captured tcp traffic using tcpdump and later analyzed the packets with wireshark.",
      tags: [
        {
          name: "tcpdump and wireshark",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "packet capturing and filtering",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
    },

    {
      name: "Portfolio Website using react and threejs",
      description:
        "A reactive portfolio website that includes a detailed information about my career.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: lohit,
    },

    {
      name: "Generative Adversarial Networks(GANs)",
      description:
        "Delivered a lecture in place of my professor from scratch with code on GANs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: gan,
      source_code_link: "https://github.com/Lohitgaddipati/GANs"
      
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };