import React, { PropTypes } from 'react'

const Text = ({ children }) => <li>{children}</li>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
