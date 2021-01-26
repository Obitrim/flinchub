import React from 'react';
import './AppFooter.css';

const Index = (props) => {
  return (
    <footer className="AppFooter BgPrimary">
    	<div className="Container AppFooter__Row">
    		<div>
	    		<strong className="FooterHeading">Contact Us</strong>
	    		<a className="AppFooter__Link" href="tel:+233549569486">Tel: +233 54 956 9486</a>
	    		<a className="AppFooter__Link" href="mailto:info.flinchub@gmail">info.flinchub@gmail.com</a>
	    	</div>
	    	<div>
	    		<strong className="FooterHeading">Customer Services</strong>
	    		<a className="AppFooter__Link" href="#">Graphic Design</a>
	    		<a className="AppFooter__Link" href="#">Web development</a>
	    		<a className="AppFooter__Link" href="#">Mobile App development</a>
	    		<a className="AppFooter__Link" href="#">Advertisements</a>
	    	</div>
	    	<div>
	    		<strong className="FooterHeading">Information</strong>
	    		<a className="AppFooter__Link" href="#">About Flinc Hub</a>
	    		<a className="AppFooter__Link" href="#">Our works</a>
	    		<a className="AppFooter__Link" href="#">Terms & Conditions</a>
	    	</div>
	    	<div>
	    		<strong className="FooterHeading">Subscribe</strong>
	    		<p>Subscribe to Flinc hub's weekly tech tips via email</p>
	    		<input 
	    			className="AppFooter__EmailInput" 
	    			placeholder="Enter your active email"
	    		/>
	    		<button className="AppFooter__SubscribeBtn">Subscribe</button>
	    	</div>
	    </div>
	    <div className="AppFooter__CompanyName">&copy;Flinc Hub 2021</div>
    </footer>
  )
}

export default Index;