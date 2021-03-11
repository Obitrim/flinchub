import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import './TeamCard.css';

const Index = ({ name, position, imageURL, ...props }) => {
  return (
    <div className="TeamCard">
    	<Zoom left><img className="TeamCard--Img" src={imageURL} alt={`${name}'s image`}/></Zoom>
    	<Slide bottom><h4 className="TeamCard--Name">{name}</h4></Slide>
    	<Slide bottom delay={250}><p className="TeamCard--Position">{position}</p></Slide>
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