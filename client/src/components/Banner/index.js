import React from 'react';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import { useHistory, useLocation } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';

import './Banner.css';
import BaseButton from '../BaseButton';

const Index = ({ heading, description }) => {
	const history = useHistory();
	const location = useLocation();

	return (
		<div className="Banner">
			<RubberBand><h1 className="Banner__Heading">{heading}</h1></RubberBand>
			<Fade bottom><p className="Banner__Desc">{description}</p></Fade>
			{ !location.pathname.includes('/contact-us') && (
				<Wobble delay={200}>
					<BaseButton text="Hire Us" size="large" onClick={() => history.push('/contact-us')}/>
				</Wobble>
				)}
		</div>
	)
}

export default Index;