import React from 'react'
import PropTypes from 'prop-types';
import './Text.css'

const Text = ({ score, children }) => {
    const getScore = () => {
        var finalScore = 100 - (score * 100).toFixed(0) + "%";
        return <span className="Score">{finalScore}</span>
    }
    return(
        <li className="Text">{score !== undefined ? getScore() : ""}{children}</li>
    )
}

Text.propTypes = {
   score: PropTypes.number,
   children: PropTypes.string
}

export default Text
