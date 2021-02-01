import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { NavLink, Link, useLocation } from 'react-router-dom';

import './Header.css';
import Container from '../Container';

const Index = (props) => {
	const location = useLocation();
	const navbarItemsNode = useRef(null);
	const [show, setShow] = useState(false);
	const [offsetHeader, setOffsetHeader] = useState(false);
	/**
	 *
	 * toggles navbar shadow on when scrolling up or down
	 *
	 * @param {object} evt - event object
	 * @returns {undefined}
	 */
	function handleShadowToggle(evt) {
		// set offsetHeader flag to true if user scrolls more than 400px otherwise false
		setOffsetHeader(document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400);
	}
	/**
	 * toggles navbar items on mobile screens
	 *
	 * @param {object} evt - event object
	 * @returns {undefined}
	 */
	function toggleNavItems(evt) {
		evt.stopPropagation();
		setShow(!show);
	}
	/**
	 * Closes navbar when
	 *
	 * @param {object} evt - event object
	 * @returns {undefined}
	 */
	function handleOnClickOutside(evt) {
		if (!navbarItemsNode.current.contains(evt.target)) {
			setShow(false);
		}
	}
	// delegate scroll event to window object
	useEffect(() => {
		window.addEventListener('scroll', handleShadowToggle);
		return () => window.removeEventListener('scroll', handleShadowToggle);
	}, []);
	// delegate click event to document object
	useEffect(() => {
		document.addEventListener('click', handleOnClickOutside);
		return () => document.removeEventListener('click', handleOnClickOutside);
	}, []);

	// Always close nav items after navigating
	useEffect(() => setShow(false), [location]);

	return (
		<header className={`Header ${offsetHeader && 'Header--Shadow'}`}>
			<Container className="Header__Container">
				<Link to="/">
					<img className="Header__Logo" src="/" alt="logo"/>
				</Link>
				<IconButton 
					type="button" 
					className="NavbarToggler" 
					onClick={toggleNavItems}
					>
					<MenuIcon/>
				</IconButton>
				<nav className={`Header__Navbar ${show && 'Header__Navbar--Show'}`} ref={navbarItemsNode}>
					<NavLink to="/" exact className="Header__NavItem" activeClassName="Header__NavItem--Active">Home</NavLink>
					<NavLink to="/services" className="Header__NavItem" activeClassName="Header__NavItem--Active">Services</NavLink>
					<NavLink to="/team" className="Header__NavItem" activeClassName="Header__NavItem--Active">Team</NavLink>
					<NavLink to="/projects" className="Header__NavItem" activeClassName="Header__NavItem--Active">Projects</NavLink>
					<NavLink to="/contact-us" className="Header__NavItem" activeClassName="Header__NavItem--Active">Contact</NavLink>
				</nav>
			</Container>
		</header>
	)
}

export default Index;