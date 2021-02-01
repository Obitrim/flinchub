import React from 'react';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import './Services.css';

const Index = (props) => {
  return (
    <>
    	<Banner 
    		heading="Our Services" 
    		description="We provide services ranging from website development, mobile app development, graphic designs, laptop stickers and many more"
    	/>
    	<Container className="HomeView__Container">
    		<h1 className="ViewHeading">Our Services</h1>
    		<div className="Services__Row">
    			<div className="Services__Col">
    				<div className="Services__Service">
    					<h2 className="ServiceHeading">Web Development</h2>
    					<p className="ServiceDescription">Lorem ipsum dolor sit amet, consectetur, adipisicing elites dolores voluptatum quisquam atque?</p>
    				</div>
    			</div>
    			<div className="Services__Col">
    				<div className="Services__Service">
    					<h2 className="ServiceHeading">Graphic Design</h2>
    					<p className="ServiceDescription">Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Recusandae temporibus perspiciatis , ea. Sapiente, provident.</p>
    				</div>
    			</div>
    			<div className="Services__Col">
    				<div className="Services__Service">
    					<h2 className="ServiceHeading">Mobile Development</h2>
    					<p className="ServiceDescription">Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Exercitationem inventore nihil nostrum labore officiis laudantium.</p>
    				</div>
    			</div>
    			<div className="Services__Col">
    				<div className="Services__Service">
    					<h2 className="ServiceHeading">Logo Design</h2>
    					<p className="ServiceDescription">Lorem ipsum dolor sit amet consectetur lit. Natus dignissimos aut ab cupiditate. Cumque, sed.</p>
    				</div>
    			</div>
    		</div>
	    </Container>
	</>
  )
}

export default Index;