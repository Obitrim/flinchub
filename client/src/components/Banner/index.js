import React from 'react';
import './Banner.css';
import BaseButton from '../BaseButton';

const Index = ({ heading, description }) => {
  return (
    <div className="Banner">
    	<h1>{heading}</h1>
    	<p className="Banner__Desc">{description}</p>
    	<BaseButton text="Hire Us"/>
    </div>
  )
}

export default Index;