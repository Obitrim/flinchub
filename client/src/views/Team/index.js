import React from 'react';

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
    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat accusamus error reiciendis tenetur deleniti dolorem tempora reprehender</p>
    			<p>Lorem ipsum dolor sit amet consectetur adipisihenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p>
    			<p>Lorem lorem tempora reprehenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p>
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