import React, { PropTypes } from 'react'

import './Text.css'

const Text = ({ children }) => <li className="Text">{children}</li>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
