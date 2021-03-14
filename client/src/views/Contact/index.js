import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	LinkedIn as LinkedInIcon,
	Twitter as TwitterIcon
} from '@material-ui/icons';

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
				<Slide left>
			    	<ContactForm wrapperClass="Contact__Col"/>
			    </Slide>
				<div className="Contact__Col Contact__Col--Right">
					<Slide top>
			    		<div className="Contact__Address">
				    		<h2 className="Contact__Col__Heading">Address</h2>
				    		<span>Main Branch: Kumasi - remote</span>
				    		<h2 className="Contact__Col__Heading">Call</h2>
				    		<a href="tel:+233549569486">+233 549 569 486</a>
				    		<h2 className="Contact__Col__Heading">Email</h2>
				    		<a href="mailto:info.flinchub@gmail.com">info.flinchub@gmail</a>
				    		<h2 className="Contact__Col__Heading">WhatsApp</h2>
				    		<a href="https://wa.me/c/233549569486" target="_blank" rel="noreferrer">+233 549 569 486</a>
				    	</div>
			    	</Slide>
			    	<Slide bottom>
				    	<div className="Contact__Info">
				    		<h2 className="Contact__Col__Heading">Follow Us</h2>
				    		<div className="SocialMedia">
				    			<a href="#" target="_blank" rel="noreferrer" className="SocialMedium" data-text="Twitter">
					    			<TwitterIcon/>
					    		</a>
					    		<a href="#" target="_blank" rel="noreferrer" className="SocialMedium" data-text="Instagram">
					    			<InstagramIcon/>
					    		</a>
					    		<a href="#" target="_blank" rel="noreferrer" className="SocialMedium" data-text="Facebook">
					    			<FacebookIcon/>
					    		</a>
					    		<a href="#" target="_blank" rel="noreferrer" className="SocialMedium" data-text="LinkedIn">
					    			<LinkedInIcon/>
					    		</a>
				    		</div>
				    	</div>
			    	</Slide>
				</div>
			</Container>
		</>
	)
}

export default Index;