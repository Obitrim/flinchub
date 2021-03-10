import React, { useState, useEffect } from 'react';

import './Projects.css';
import Banner from '../../components/Banner';
import FilterBar from '../../components/FilterBar';
import Container from '../../components/Container';
import ProjectCard from '../../components/ProjectCard';

const Index = (props) => {
	const [projects, setProjects] = useState([
		{ title: 'School Management App', category: 'Websites', imageUrl: 'images/webui.jpg', previewUrl: 'https://google.com' },
		{ title: 'Facebook Logo', category: 'graphic design', imageUrl: 'images/poster.jpg', previewUrl: '' },
		{ title: 'Flinc Hub Stickers', category: 'laptop stickers', imageUrl: 'images/sticker.jpg', previewUrl: '' , previewUrl: ''},
		{ title: 'Pharmart', category: 'Websites', imageUrl: 'images/webui.jpg', previewUrl: 'https://facebook.com' },
		{ title: 'Facebook redesigned', category: 'graphic design', imageUrl: 'images/poster.jpg', previewUrl: '' },
		{ title: 'JJ Rawlings Funeral Poster', category: 'laptop stickers', imageUrl: 'images/sticker.jpg', previewUrl: '' , previewUrl: ''}
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
	}, [filter, projects]);

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
							<ProjectCard 
								key={project.title + index} 
								title={project.title}
								previewUrl={project.previewUrl}
								image={process.env.PUBLIC_URL + `${project.imageUrl}`}
								shadow
								/>
						))
					)}
				</div>
			</Container>
		</>
  )
}

export default Index;