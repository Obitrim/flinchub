import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import FilterBar from '../../components/FilterBar';
import Container from '../../components/Container';

const Index = (props) => {
	const [projects, setProjects] = useState([
		{ title: 'School Management App', category: 'Websites', image: './webui.jpg' },
		{ title: 'Facebook Logo', category: 'graphic design', image: './poster.jpg' },
		{ title: 'Flinc Hub Stickers', category: 'laptop stickers', image: './sticker.jpg' }
	]);
	const [filter, setFilter] = useState('all');
	const [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		console.log(filter);
		if (filter.toLowerCase() === 'all'){
			setFilteredProjects(projects);
		} else {
			let filteredProjects = projects.filter(project => project.category.toLowerCase() === filter);
			setFilteredProjects(filteredProjects);
		}
	}, [filter]);

	function onFilterChanged(filter){
		setFilter(filter.toLowerCase());
	}

	return (
		<>
			<Banner 
				heading="Our Projects" 
				description="We built and satisfied our customers with our projects"
			/>
			<Container style={{ padding: '5em 0' }}>
				<h1 className="ViewHeading">Projects</h1>
				<FilterBar 
					onFilterChanged={onFilterChanged}
					filters={['All', 'Websites', 'Graphic Design', 'Laptop Stickers']}
				/>
				{/*Filtered works*/}
				<div className="Projects">
					{filteredProjects.length > 0 && (
						filteredProjects.map((project, index) => (
							<p className="ProjectCard" key={project.title + index}>
								{project.title}: {project.category}
							</p>
						))
					)}
				</div>
			</Container>
		</>
  )
}

export default Index;