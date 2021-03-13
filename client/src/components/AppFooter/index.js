import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';

import './AppFooter.css';

const Index = (props) => {
  return (
    <footer className="AppFooter BgPrimary">
    	<Fade bottom cascade>
	    	<div className="Container AppFooter__Row">
	    		<div>
		    		<strong className="FooterHeading">Contact Us</strong>
		    		<a className="AppFooter__Link" href="tel:+233549569486">Tel: +233 54 956 9486</a>
		    		<a className="AppFooter__Link" href="mailto:info.flinchub@gmail">info.flinchub@gmail.com</a>
		    	</div>
		    	<div>
		    		<strong className="FooterHeading">Customer Services</strong>
		    		<span className="AppFooter__Link" href="#">Graphic Design</span>
		    		<span className="AppFooter__Link" href="#">Web development</span>
		    		<span className="AppFooter__Link" href="#">Mobile App development</span>
		    		<span className="AppFooter__Link" href="#">Advertisements</span>
		    	</div>
		    	<div>
		    		<strong className="FooterHeading">Information</strong>
		    		<Link to="/about-us" className="AppFooter__Link" href="#">About Flinc Hub</Link>
		    		<Link to="/projects" className="AppFooter__Link" href="#">Our works</Link>
		    		<Link to="/terms" className="AppFooter__Link" href="#">Terms & Conditions</Link>
		    	</div>
		    	<div>
		    		<strong className="FooterHeading">Subscribe</strong>
		    		<p>Subscribe to Flinc hub's weekly tech tips via email</p>
		    		<input 
		    			className="AppFooter__EmailInput" 
		    			placeholder="Enter your active email"
		    		/>
		    		<Pulse forever><button className="AppFooter__SubscribeBtn">Subscribe</button></Pulse>
		    	</div>
		    </div>
		</Fade>
	    <div className="AppFooter__CompanyName">&copy;Flinc Hub 2021</div>
    </footer>
  )
}

export default Index;