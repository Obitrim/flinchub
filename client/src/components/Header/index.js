import React, { useState } from 'react';
import './Header.css';
import Container from '../Container';

const Index = (props) => {
	const [show, setShow] = useState(false);

	return (
		<header className="Header">
			<Container className="Header__Container">
				<img className="Header__Logo" src="/" alt="logo"/>
				<button 
					type="button" 
					className="NavbarToggler" 
					onClick={() => setShow(!show)}
					>Toggler
				</button>
				<nav className={`Header__Navbar ${show && 'Header__Navbar--Show'}`}>
					<a href="#" className="Header__NavItem">Home</a>
					<a href="#" className="Header__NavItem">Services</a>
					<a href="#" className="Header__NavItem">Team</a>
					<a href="#" className="Header__NavItem">Projects</a>
					<a href="#" className="Header__NavItem">Contact</a>
				</nav>
			</Container>
		</header>
	)
}

export default Index;