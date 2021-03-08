import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

const Index = ({children, className, ...props}) => {
  return (
    <div className={`Container ${className}`} {...props}>{children}</div>
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