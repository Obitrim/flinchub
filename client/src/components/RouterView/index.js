import React from 'react';
import { Route } from 'react-router-dom';

import './RouterView.css';

// view components
import Home from '../../views/Home';
import Team from '../../views/Team';
import ContactUs from '../../views/Contact';
import Projects from '../../views/Projects';
import Services from '../../views/Services';

const Index = (props) => {
  return (
    <main className="RouterView">
    	<Route path="/" exact component={Home}/>
    	<Route path="/team" component={Team}/>
    	<Route path="/projects" component={Projects}/>
    	<Route path="/services" component={Services}/>
    	<Route path="/contact-us" component={ContactUs}/>
    </main>
  )
}

export default Index;