import React from 'react';

import './Contact.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';

const Index = (props) => {
  return (
    <>
    	<Banner 
    		heading="Contact Us" 
    		description="Get in touch with us and let's talk business"
    	/>
    	<Container className="Contact__MainContent">
	    	<ContactForm wrapperClass="Contact__Col"/>
	    	<div className="Contact__Col Contact__Col--Right">
	    		<div className="Contact__Address">
		    		<h2 className="Contact__Col__Heading">Address</h2>
		    		<span>Main Branch: Kumasi - remote</span>
		    		<h2 className="Contact__Col__Heading">Phone</h2>
		    		<a href="tel:+233549569486">+233 549 569 486</a>
		    		<h2 className="Contact__Col__Heading">Email</h2>
		    		<a href="mailto:info.flinchub@gmail.com">info.flinchub@gmail</a>
		    	</div>
		    	<div className="Contact__Info">
		    		<h2 className="Contact__Col__Heading">More Information</h2>
		    		<p className="Contact__Info__Text">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Ducimus molestias, blanditiis enim maxime nulla error, voluptatibus rerum id reiciendis! Cum.</p>
		    		<p className="Contact__Info__Text">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Ducimus molestias, blanditiis enim maxime nulla error, voluptatibus rerum id reiciendis! Cum.</p>
		    	</div>
	    	</div>
    	</Container>
    </>
  )
}

export default Index;