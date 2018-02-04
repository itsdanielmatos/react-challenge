import React from 'react'
import PropTypes from 'prop-types'
import './Search.css'


const Search = ({searchValue, onChange, placeholder = 'Search Word', disabled}) => {
  return (<input className={`Search ${disabled ? 'Disabled' : ''}`.trim()} placeholder={placeholder} value={searchValue} onChange={onChange} disabled={disabled}/>);
}

Search.propTypes = {
   placeholder: PropTypes.string,
   disabled: PropTypes.bool.isRequired,
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search;
