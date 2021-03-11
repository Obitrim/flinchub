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
	    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta autem voluptate asperiores cumque dolorum dolorem eaque, obcaecati. Ex sit praesentium, fugit nam itaque. Omnis possimus, id provident natus similique quia velit quos dolore quas magni sed unde pariatur, voluptate.
	    	</p>
	    	<p style={textStyles}>
	    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta autem voluptate asperiores cumque dolorum dolorem eaque, obcaecati. Ex sit praesentium, fugit nam itaque. Omnis possimus, id provident natus similique quia velit quos dolore quas magni sed unde pariatur, voluptate.
	    	</p>
	    	<p style={textStyles}>
	    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta autem voluptate asperiores cumque dolorum dolorem eaque, obcaecati. Ex sit praesentium, fugit nam itaque. Omnis possimus, id provident natus similique quia velit quos dolore quas magni sed unde pariatur, voluptate.
	    	</p>
	    	<Pulse forever>
		    	<BaseButton size="large" style={{ margin: '2rem auto', display: 'block' }}>
		    		Contact Us
		    	</BaseButton>
		    </Pulse>
	    </Container>
  	</>
  )
}

export default Index;