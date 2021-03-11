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
    			<Slide bottom><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat accusamus error reiciendis tenetur deleniti dolorem tempora reprehender</p></Slide>
    			<Slide bottom><p>Lorem ipsum dolor sit amet consectetur adipisihenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p></Slide>
    			<Slide bottom delay={200}><p>Lorem lorem tempora reprehenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p></Slide>
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