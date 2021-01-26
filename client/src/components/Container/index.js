import React from 'react';
import './Container.css';

const Index = ({children, className}) => {
  return (
    <div className={`Container ${className}`}>{children}</div>
  )
}

export default Index;