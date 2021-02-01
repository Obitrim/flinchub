import React from 'react';
import PropTypes from 'prop-types';

import './BaseButton.css';

const Index = ({ text, onClick, size }) => {
  return (
    <button 
    	type="button" 
    	className={`BaseButton ${size.toLowerCase() === 'large' && 'BaseButton--Large'}`} 
    	onClick={onClick}>
    	{text || 'Button'}
    </button>
  )
}

Index.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['large', 'small'])
}

Index.defaultProps = {
	text: 'Button',
	onClick: () => {
		alert('Please pass onClick prop to handle click event');
	},
	size: 'small'
}

export default Index;