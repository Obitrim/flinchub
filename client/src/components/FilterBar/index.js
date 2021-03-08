import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FilterBar.css';
import BaseButton from '../BaseButton';

const Index = ({filters, onFilterChanged}) => {
	const [selectedFilter, setSelectedFilter] = useState(filters[0]);
	/**
	 *
	 * reacts to change in filter
	 *
	 *@params {string} filter
	 *@returns {undefined}
	 */
	function handleFilterChange(filter){
		setSelectedFilter(filter);
		onFilterChanged(filter);
	}
	/**
	 *
	 * checks if a given filter value is selected
	 *
	 * @params {String} filter - value to compare against
	 * @returns {Boolean}
	 */
	function isSelected(filter){
		return selectedFilter.toUpperCase() === filter.toUpperCase();
	}

	return (
		<div className="FilterBar">
			{filters.map((filter, index) => (
				<BaseButton 
					type="button" 
					className={`FilterButton ${!isSelected(filter) && 'FilterButton--NotActive'}`}
					text={filter}
					key={filter + index}
					size="small" 
					onClick={evt => handleFilterChange(filter)} 
					/>
				))}
		</div>
	)
}

Index.propTypes = {
	filters: PropTypes.arrayOf(PropTypes.string)
}

Index.defaultProps = {
	filters: ['All']
}

export default Index;