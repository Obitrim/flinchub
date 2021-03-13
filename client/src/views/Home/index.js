import React from 'react';
import Fade from 'react-reveal/Fade';

import './Home.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';

const Index = (props) => {
  return (
    <>
    	<Banner 
    		heading="Flinc Hub" 
    		description="As a business dealing with us, we build your business together by providing our most quality service. Hire us and get satisfied" 
    	/>
    	<Container className="HomeView__Container">
    		<h1 className="ViewHeading">About Us</h1>
	    	<article className="HomeView__Row">
	    		<Fade cascade bottom>
		    		<section className="HomeView__Col">
		    			<p className="HomeView__AboutText">
		    				Hi and welcome to Flinc Hub, an IT based organization that looks that looks to provide services such as installation and activation of windows, idea advertisement, software installation, graphic design, logo 
		    				design and animation.
		    			</p>
		    			{/**<img src="" />**/}
		    		</section>
		    	</Fade>
		    	<Fade cascade bottom>
		    		<section className="HomeView__Col">
		    			<p className="HomeView__AboutText">
		    				We also provide top notch services in mobile app design and development, website design and development,
							Search engine optimization services and laptop stickers
		    			</p>
		    			<p className="HomeView__AboutText">
		    				Our Team of qualified personnel work to seek the best interest of
							the customer with home-feeling services and best outcomes. Flinc Hub provides services for all individuals and corporate
							organizations.
		    			</p>
		    		</section>
	    		</Fade>
	    		<section className="HomeView__Col"></section>
	    	</article>
	    </Container>
    </>
  )
}

export default Index;