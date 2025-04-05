import { useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './index.css';
import Home from './componentes/home';
import Header from './componentes/header';
import About from './componentes/about_me';
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
    <>
      <Router basename='/portfolio'>     
      <Header theme={theme} toggle_theme ={toggle_theme}/>
        <Routes>
          <Route exact path="/" element = {<Home theme={theme}/>} ></Route>          
          <Route path="/about" element = {<About theme={theme}/>}></Route>
          <Route path="/contact" element = {<Contact theme={theme}/>}></Route>
          <Route path="/project" element = {<Project theme={theme}/>}></Route>
        </Routes>
        <Footer theme={theme}/>       
      </Router> 
    </>
  );
}

export default App;
