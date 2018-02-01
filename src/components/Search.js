import React, { PropTypes } from 'react'

import './Search.css'

function Search({searchValue, onChange, placeholder = "Search Word", disabled}) {
  return (<input className={`Search ${disabled ? "Disabled" : ""}`} placeholder={placeholder} value={searchValue} onChange={onChange} disabled={disabled}/>)
}

Search.propTypes = {
   placeholder: PropTypes.string,
   disabled: PropTypes.bool.isRequired,
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
