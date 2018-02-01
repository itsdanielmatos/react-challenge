import React, { PropTypes } from 'react'

import './Search.css'

function Search({searchValue, onChange, placeholder = "Search Word"}) {
  return (<input className="Search" placeholder={placeholder} value={searchValue} onChange={onChange} />)
}

Search.propTypes = {
   placeholder: PropTypes.string,
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
