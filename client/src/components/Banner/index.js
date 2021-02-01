import React from 'react';
import './Banner.css';
import BaseButton from '../BaseButton';

const Index = ({ heading, description }) => {
  return (
    <div className="Banner">
    	<h1 className="Banner__Heading">{heading}</h1>
    	<p className="Banner__Desc">{description}</p>
    	<BaseButton text="Hire Us" size="large"/>
    </div>
  )
}

export default Index;