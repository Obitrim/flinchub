import React from 'react';
import PropTypes from 'prop-types';

import './TeamCard.css';

const Index = ({ name, position, imageURL, ...props }) => {
  return (
    <div className="TeamCard">
    	<img className="TeamCard--Img" src={imageURL} alt={`${name}'s image`}/>
    	<h4 className="TeamCard--Name">{name}</h4>
    	<p className="TeamCard--Position">{position}</p>
    </div>
  )
}



Index.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    imageURL: PropTypes.string
}

Index.defaultProps = {
	name: 'Member\'s name',
	position: 'Position',
	imageURL: '/logo192.png'
}


export default Index;