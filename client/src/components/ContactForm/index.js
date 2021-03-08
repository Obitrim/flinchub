import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css';
import BaseButton from '../BaseButton';

const Index = ({WrapperClass}) => {
	const [formData, setFormData] = useState({
		firstName: '', lastName: '', email: '', subject: '', message: ''
	});
	/**
	 *
	 * attempts to capture user inputs
	 *
	 *-@param {Object} evt - JS Event Object
	 *-@returns {undefined}
	 */
	function onChange(evt) {
		let targetInput = evt.target;
		setFormData({
			...formData,
			[targetInput.name]: targetInput.value
		});
	}
	/**
	 *
	 * attempts to send a message
	 *
	 *-@param {Object} evt - JS Event Object
	 *-@returns {undefined}
	 */
	function onSubmit(evt) {
		evt.preventDefault();
		console.log('submitting');
	}

	return (
		<form className={`ContactForm ${WrapperClass}`}>
			<div className="FormGroup FormGroup--Inline">
				<div className="FirstName">
					<label className="FormGroup__Label" htmlFor="firstName">First Name</label>
					<input 
						className="FormGroup__Input" 
						type="text" 
						name="firstName" 
						id="firstName"
						onChange={onChange}
						value={formData.firstName}
					/>
				</div>
				<div className="LastName">
					<label className="FormGroup__Label" htmlFor="lastName">Last Name</label>
					<input 
						className="FormGroup__Input" 
						type="text" 
						name="lastName" 
						id="lastName"
						onChange={onChange}
						value={formData.lastName}
					/>
				</div>
			</div>
			<div className="FormGroup">
				<label className="FormGroup__Label" htmlFor="email">Email</label>
				<input 
					className="FormGroup__Input" 
					type="email"
					 name="email" 
					 id="email"
					 onChange={onChange}
					 value={formData.email}
					/>
			</div>
			<div className="FormGroup">
				<label className="FormGroup__Label" htmlFor="subject">Subject</label>
				<input 
					className="FormGroup__Input" 
					type="text" 
					name="subject" 
					id="subject"
					onChange={onChange}
					value={formData.subject}
				/>
			</div>
			<div className="FormGroup">
				<label className="FormGroup__Label" htmlFor="message">Message</label>
				<textarea 
					className="FormGroup__TextArea"
					name="message" 
					id="message" 
					rows="10"
					onChange={onChange}
					value={formData.message}> Type your message
				</textarea>
			</div>
			<BaseButton 
				className="ContactForm__SubmitBtn"
				text="Send Message" 
				type="submit" 
				onClick={onSubmit} 
			/>
		</form>
	)
}

Index.propTypes = {
	wrapperClass: PropTypes.string
}

export default Index;