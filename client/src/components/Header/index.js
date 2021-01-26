import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import Container from '../Container';

const Index = (props) => {
	const location = useLocation();
	const [show, setShow] = useState(false);
	const [offsetHeader, setOffsetHeader] = useState(false);

	function handleShadowToggle(evt) {
		// set offsetHeader flag to true if user scrolls more than 400px otherwise false
		setOffsetHeader(document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleShadowToggle);
		return () => window.removeEventListener('scroll', handleShadowToggle);
	}, []);

	// Always close nav items after navigating
	useEffect(() => setShow(false), [location]);

	return (
		<header className={`Header ${offsetHeader && 'Header--Shadow'}`}>
			<Container className="Header__Container">
				<img className="Header__Logo" src="/" alt="logo"/>
				<button 
					type="button" 
					className="NavbarToggler" 
					onClick={() => setShow(!show)}
					>Toggler
				</button>
				<nav className={`Header__Navbar ${show && 'Header__Navbar--Show'}`}>
					<Link to="" className="Header__NavItem">Home</Link>
					<Link to="" className="Header__NavItem">Services</Link>
					<Link to="" className="Header__NavItem">Team</Link>
					<Link to="" className="Header__NavItem">Projects</Link>
					<Link to="" className="Header__NavItem">Contact</Link>
				</nav>
			</Container>
		</header>
	)
}

export default Index;