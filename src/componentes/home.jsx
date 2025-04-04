import React from 'react'
import Hero from './hero';
import About from './about_me';
import Skills from './skills';
import Project from './project.jsx';
import Contact from './contact.jsx';

const home = (props) => {
  return (
    <div>
        <Hero theme={props.theme}/>
        <About theme={props.theme}/>
        <Skills theme={props.theme}/>
        <Project theme={props.theme}/>
        <Contact theme={props.theme}/>
    </div>
  )
}

export default home