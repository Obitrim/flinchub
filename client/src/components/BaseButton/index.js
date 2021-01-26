import React from 'react';
import './BaseButton.css';

const Index = ({ text, onClick }) => {
  return (
    <button type="button" className="BaseButton" onClick={onClick}>
    	{text || 'Button'}
    </button>
  )
}

export default Index;