import React from 'react';
import PropTypes from 'prop-types';
import './SearchOptions.css';
import Option from './Option.js';
 
const SearchOptions = ({disabled, handleOptions}) => {
    const handleOptionsChange = (event) => {
        handleOptions(event.target);
    }

    return (
        <div className={`SearchOptions ${disabled ? "Disabled" : ""}`.trim()}>
            <Option id="match-case" type="checkbox" disabled={disabled} onChange={handleOptionsChange} label="Match Case" />
            <Option id="sort" type="checkbox" disabled={disabled} onChange={handleOptionsChange} label="Sort By Percentage" />
        </div>
    )
}

SearchOptions.propTypes = {
    handleOptions: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default SearchOptions
