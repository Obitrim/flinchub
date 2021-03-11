import React from 'react';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import RubberBand from 'react-reveal/RubberBand';

import './Banner.css';
import BaseButton from '../BaseButton';

const Index = ({ heading, description }) => {
  return (
    <div className="Banner">
    	<RubberBand><h1 className="Banner__Heading">{heading}</h1></RubberBand>
    	<Fade bottom><p className="Banner__Desc">{description}</p></Fade>
    	<Wobble delay={200}><BaseButton text="Hire Us" size="large"/></Wobble>
    </div>
  )
}

export default Index;