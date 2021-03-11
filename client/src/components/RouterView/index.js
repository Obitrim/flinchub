import React from 'react';
import { Route } from 'react-router-dom';

import './RouterView.css';

// view components
import Home from '../../views/Home';
import Team from '../../views/Team';
import AboutUs from '../../views/About';
import ContactUs from '../../views/Contact';
import Projects from '../../views/Projects';
import Services from '../../views/Services';
import TermsAndConditions from '../../views/TermsAndConditions';

const Index = (props) => {
  return (
    <main className="RouterView">
    	<Route path="/" exact component={Home}/>
    	<Route path="/team" component={Team}/>
    	<Route path="/about-us" component={AboutUs}/>
    	<Route path="/projects" component={Projects}/>
    	<Route path="/services" component={Services}/>
    	<Route path="/contact-us" component={ContactUs}/>
    	<Route path="/terms" component={TermsAndConditions}/>
    </main>
  )
}


export default Index;