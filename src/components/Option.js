import React from 'react'
import PropTypes from 'prop-types'
import './Option.css'


const Option = ({id, type, disabled, onChange, label}) => {
  return (<label htmlFor={id} className='Option' ><input onChange={onChange} id={id} type={type} disabled={disabled}/>{label}</label>);
}

Option.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Option;
