import React from 'react';
import Pulse from 'react-reveal/Pulse';

import Banner from '../../components/Banner';
import Container from '../../components/Container';
import BaseButton from '../../components/BaseButton';

const textStyles = {
	lineHeight: '140%',
	margin: '1.5rem auto',
	width: '550px'
}

const Index = (props) => {
  return (
  	<>
  		<Banner
  			heading="About Us"
  			description="Where we started from and where we hope to be"
  			/>
	    <Container className="AboutView" style={{ padding: 'var(--v-whitespace) 0' }}>
	    	<h1 className="ViewHeading" style={{ marginBottom: '2rem' }}>Mission & Vision</h1>
    		<p style={textStyles}>
	    		The mission of flicn hub is to be the most sought Information Technology consultancy in creating a better everyday life by providing satisfactory solutions for people and business entities.
	    	</p>
	    	<p style={textStyles}>
	    		Our vision is to find solutions to major issues affecting business entities, people and the Ghana as a whole.
	    	</p>
	    	<h3 style={{...textStyles, marginBottom: '0'}}>Core Values</h3>
	    	<ul style={textStyles}>
    			<li style={{ transform: 'translateX(2rem)' }}>Deliver on our promise</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Be the best</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Be accountable, honest, trustworthy and truthful to client</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Bold to come up with innovative ideas to tackle problems</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Be passionate and committed to serving the client</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Create a fun filled environment for client</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Always learn and constantly improve on skills</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Build simple but quality solutions with our great teamwork</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Focus on solving problems in many diversities</li>
    			<li style={{ transform: 'translateX(2rem)' }}>Respect for colleagues and clients</li>
    		</ul>
	    	<p style={textStyles}>
	    		
	    	</p>
	    	<Pulse forever>
		    	<BaseButton size="large" style={{ margin: '3rem auto', display: 'block' }}>
		    		Contact Us
		    	</BaseButton>
		    </Pulse>
	    </Container>
  	</>
  )
}

export default Index;