import React from 'react'
import SectionTag from '../componentes/section_tag.js'
import about_pic from '../img/WhatsApp Image 2024-06-18 at 16.08.50_31add375.jpg'
import '../css/about.css'

const about_me = (props) => {
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
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing  the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            <br/><br/>
            
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            <br/><br/>

            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            <br/><br/>

            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
            <br/><br/>

            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
          </p>
        </div>    
      </div>
    </div>
  )
}

export default about_me
