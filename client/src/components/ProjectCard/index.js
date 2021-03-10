import React from 'react';

const Index = ({title, image, previewUrl, ...props}) => {
  return (
    <div className="ProjectCard" {...props}>
    	<h3 className="ProjectCard__Heading">{title}</h3>
    	{!!previewUrl && <a href={previewUrl}>Preview</a>}
    	<img src={image} alt={title} />
    </div>
  )
}

export default Index;