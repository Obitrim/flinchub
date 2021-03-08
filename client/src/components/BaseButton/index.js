import React from 'react';
import PropTypes from 'prop-types';

import './BaseButton.css';

const Index = ({ text, type, onClick, size, className }) => {
  return (
    <button 
    	type={type}
    	className={`BaseButton ${size.toLowerCase() === 'large' && 'BaseButton--Large'} ${className}`} 
    	onClick={onClick}
    	>
    	{text || 'Button'}
    </button>
  )
}

Index.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['large', 'small']),
	type: PropTypes.string
}

Index.defaultProps = {
	text: 'Button',
	onClick: () => {
		alert('Please pass onClick prop to handle click event');
	},
	size: 'small',
	type: 'button'
}

export default Index;