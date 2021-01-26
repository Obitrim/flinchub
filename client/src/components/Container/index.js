import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

const Index = ({children, className}) => {
  return (
    <div className={`Container ${className}`}>{children}</div>
  )
}

Index.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

Index.defaultProps = {
	children: 'Content goes here'
}

export default Index;