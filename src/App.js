import { useState} from 'react';
import Header from './componentes/header';
import Hero from './componentes/hero';
import About from './componentes/about';
import Skills from './componentes/skills';
import Project from './componentes/project';
import Contact from './componentes/contact';
import Footer from './componentes/footer';

function App() {

  const [theme,settheme]=useState ('dark');
  function toggle_theme (){
    if(theme==='dark'){
      settheme('');
      console.log(theme);
    }
    else {
      settheme('dark');
    }
  }
  
  return (

    <div className="App">
      <Header theme={theme} toggle_theme ={toggle_theme}/>
      <Hero theme={theme}/>
      <About theme={theme}/>
      <Skills theme={theme}/>
      <Project theme={theme}/>
      <Contact theme={theme}/>
      <Footer theme={theme}/>      
    </div>
  );
}

export default App;
