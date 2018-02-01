import React, { PropTypes } from 'react'

import './Search.css'

function Search({searchValue, onChange}) {
  return (<input className="Search" placeholder="Search Word" value={searchValue} onChange={onChange} />)
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
