import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css';
import swal from 'sweetalert';
import { DB } from '../../firebase';
import BaseButton from '../BaseButton';

const Index = ({WrapperClass}) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		username: '', email: '', subject: '', message: ''
	});
	const [formErrors, setFormErrors] = useState({
		username: null, email: null, subject: null, message: null
	})
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

		let validationMessage = targetInput.validity.valid ? null: targetInput.validationMessage
		setFormErrors({ 
			...formErrors, 
			[targetInput.name]: validationMessage 
		});
	} 
	/**
	 *
	 * Checks if there are no error messages
	 * - No error messages means no errors in form
	 *
	 * @returns {Boolean} - true if there are no error messages and false if otherwise
	 */
	function isValidFormData() {
		let { username, email, subject, message } = formErrors;
		return ( username == null &&
				email == null &&
				subject == null &&
				message == null )
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
		setIsSubmitting(true);
		// save messages
		DB.collection('client-messages').add({ ...formData }).then(() => {
			swal({
				title: 'Message Sent',
				text: 'Your message has been sent successfully. An agent will get back to you soon',
				icon: 'success'
			}).then(() => {
				setFormData({ username: '', email: '', subject: '', message: ''});
			})
		}).catch(error => {
			console.error(error);
			swal({
				title: 'Ooopsy!!! Try again',
				text: 'Your request wasn\'t sent. Please check your internet connection.',
				icon: 'error'
			})
		}).finally(() => setIsSubmitting(false));
	}

	return (
		<form className={`ContactForm ${WrapperClass}`} noValidate>
			<div className="FormGroup">
				<label className="FormGroup__Label" htmlFor="username">Username</label>
				<input 
					className="FormGroup__Input" 
					type="text" 
					name="username" 
					id="username"
					onChange={onChange}
					value={formData.lastName}
					minLength="6"
					required
				/>
				{formErrors.username && <output className="ErrorMessage">{formErrors.username}</output>}
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
					 pattern="[a-zA-Z0-9]{3,}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}"
					required
					/>
					{formErrors.email && <output className="ErrorMessage">{formErrors.email}</output>}
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
					minLength="10"
					required
				/>
				{formErrors.subject && <output className="ErrorMessage">{formErrors.subject}</output>}
			</div>
			<div className="FormGroup">
				<label className="FormGroup__Label" htmlFor="message">Message</label>
				<textarea 
					className="FormGroup__TextArea"
					name="message" 
					id="message" 
					rows="10"
					onChange={onChange}
					minLength="15"
					required
					value={formData.message}> Type your message
				</textarea>
				{formErrors.message && <output className="ErrorMessage">{formErrors.message}</output>}
			</div>
			<BaseButton 
				className="ContactForm__SubmitBtn"
				text={isSubmitting ? 'Submitting ...': 'Send Message'} 
				type="submit" 
				onClick={onSubmit} 
				disabled={isSubmitting || !isValidFormData()}
			/>
		</form>
	)
}

Index.propTypes = {
	wrapperClass: PropTypes.string
}

export default Index;