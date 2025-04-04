import React from 'react'
import SectionTag from './section_tag'
import about_pic from '../img/WhatsApp Image 2024-06-18 at 16.08.50_31add375.jpg'
import '../css/about.css'

const About_me = (props) => {
  return (
    <div className={`about-body ${props.theme}`}>
      <SectionTag title='About me' theme = {props.theme}/>
      <div className='primary-about-sec'>
        <div className='about-img-container'>
          <img src={about_pic} className={`primary-about-img ${props.theme}`} alt='My pic'></img>
          </div>      
        <div className='about-content-container'>
          <h2 className='about-heading'>Curious about me? Here you have it:</h2>
          <p className='about-para'>
          Hello! I'm Aqdas Rehman, a budding professional with a passion for Web Development and Designing, currently based in Delhi. As part of my undergraduate journey pursuing a BCA degree at Asian School of Business, I am enthusiastic about honing my skills and making a mark in the tech and design world.

          <br /><br />

          My primary focus lies in Web Development, where I explore the dynamic world of JavaScript to create interactive and user-friendly websites. Additionally, my creative flair extends to Logo Designing, Social Media Post Designing, and Poster Designing, allowing me to blend technology with aesthetics.

          <br /><br />

          I am currently part of the undergraduate program in Computer Applications (BCA) at Asian School of Business. This academic journey has provided me with a strong foundation in computer science and the skills needed for the ever-evolving field of web development.
          <br /><br />

          Key Skills:
          <br />

          <b>Web Development</b>: Proficient in HTML, CSS, and currently exploring the dynamic aspects with JavaScript.
          <br />
          <b>Logo Designing</b>: Crafting unique and memorable logos to represent brands effectively.
          <br />
          <b>Social Media Post Designing</b>: Creating engaging visuals tailored for social media platforms.
          <br />
          <b>Poster Designing</b>: Designing visually appealing posters for various purposes.
          <br /><br />
          As a fresher, I am eager to contribute my skills and learn from real-world experiences. I believe in the power of technology to transform ideas into digital solutions, and I am excited about the possibilities that lie ahead in the field of web development.

          <br />

          I'm open to collaborations, learning opportunities, and connecting with fellow enthusiasts. Feel free to reach out via aqdas.rehmanbca-2022@asb.edu.in to discuss anything related to web development or design. You can also find me on LinkedIn to stay updated on my latest projects and endeavors.
          <br />

          Looking forward to exploring the vast world of web development and design together!
          </p>
        </div>    
      </div>
    </div>
  )
}

export default About_me