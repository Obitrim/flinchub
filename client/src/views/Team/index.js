import React from 'react';
import Slide from 'react-reveal/Slide';

import './Team.css';
import Banner from '../../components/Banner';
import TeamCard from '../../components/TeamCard';
import Container from '../../components/Container';

const Index = (props) => {
  return (
    <>
    	<Banner 
    		heading="Our Team" 
    		description="We are a team of enthusiastic and effecient professionals hoping to help promote businesses with our services"
    	/>
    	{/*Information about entire team*/}
    	<Container className="Team__Container">
    		<section className="Team__GeneralInfo">
    			<h1 className="ViewHeading">Our Team</h1>
    			<Slide bottom>
                    <p>
                        We're a team of developers, designers, thinkers, explorers. We approach work innovatively with fun, creativity and keep learning to bring the best to our clients. We create exactly the best content we think is fit for whatever our clients want to satisfy them. We design, build and ship world-class digital products for forward-thinking brands that connect with us.
                    </p>
                </Slide>
    			<Slide bottom delay={200}>
                    <p>
                        Everyone in the team is dedicated to serving any client with respect necessary. As part of our vision, we aspire to be the most sought I.T consultancy in creating a better everyday life by providing satisfactory solutions for people and business entities.         
                    </p>
                </Slide>
    		</section>
            <section className="Team__Members">
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
            </section>
    	</Container>
    	
    </>
  )
}

export default Index;