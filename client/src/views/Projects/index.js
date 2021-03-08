import React from 'react';
import Banner from '../../components/Banner';
import FilterBar from '../../components/FilterBar';
import Container from '../../components/Container';

const Index = (props) => {
	function onFilterChanged(filter){
		console.log('current filter: ' + filter);
	}

	return (
		<>
			<Banner 
				heading="Our Projects" 
				description="We built and satisfied our customers with our projects"
			/>
			<Container style={{ padding: '5em 0' }}>
				<h1 className="ViewHeading">Projects</h1>
				{/*Filter bar*/}
				<FilterBar 
					onFilterChanged={onFilterChanged}
					filters={['All', 'Websites', 'Graphic Design', 'Laptop Stickers']}
				/>
				{/*Filtered works*/}
			</Container>
		</>
  )
}

export default Index;