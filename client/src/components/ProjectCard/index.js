import React from 'react';
import PropTypes from 'prop-types';

import './ProjectCard.css';

const Index = ({title, image, previewUrl, shadow, ...props}) => {
  return (
    <div className={`ProjectCard ${ shadow && "ProjectCard--Shadow"}`} {...props}>
    	<div className="ProjectCard__Overlay">
    		<h3 className="ProjectCard__Heading">{title}</h3>
    		{!!previewUrl && <a className="ProjectCard__Link" href={previewUrl}>Preview</a>}
    	</div>
    	<img className="ProjectCard__Img" src={image} alt={title} />
    </div>
  )
}

Index.propTypes = {
	title: PropTypes.string,
	image: PropTypes.any,
	previewUrl: PropTypes.string,
	shadow: PropTypes.bool
}

Index.defaultProps = {
	shadow: false
}

export default Index;