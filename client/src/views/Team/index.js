import React from 'react';

import './Team.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';

const Index = (props) => {
  return (
    <>
    	<Banner 
    		heading="Our Team" 
    		description="We are a team of enthusiastic and effecient professionals hoping to help promote businesses with our services"
    	/>
    	{/*Information about entire team*/}
    	<Container>
    		<div className="Team__GeneralInfo">
    			<h1>Our Team</h1>
    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat accusamus error reiciendis tenetur deleniti dolorem tempora reprehenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p>
    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat accusamus error reiciendis tenetur deleniti dolorem tempora reprehenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p>
    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat accusamus error reiciendis tenetur deleniti dolorem tempora reprehenderit voluptas, quaerat, in architecto quam blanditiis. Esse consequatur similique dicta, aliquam excepturi?</p>
    		</div>
    	</Container>
    	{/*Team member cards*/}
    	{/*Team member cards*/}
    	{/*Team member cards*/}
    	{/*Team member cards*/}
    </>
  )
}

export default Index;