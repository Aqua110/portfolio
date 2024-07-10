import React from 'react'
import Hero from './hero';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';

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
