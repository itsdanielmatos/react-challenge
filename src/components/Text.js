import React from 'react'
import PropTypes from 'prop-types';
import './Text.css'

const Text = ({ children }) => <li className="Text">{children}</li>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
