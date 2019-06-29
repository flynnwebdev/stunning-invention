import React from 'react'
import PropTypes from 'prop-types'

function PercentageStat({ label, score, total = Math.max(1, score) }) {
    return (
        <div className="percentage-stat">
            <h6>{label}</h6>
            <span>{Math.round(score / total * 100)}%</span>
        </div>
    )
}

PercentageStat.defaultProps = {
    score: 0
}

PercentageStat.propTypes = {
    label: PropTypes.oneOf(['Maths', 'Arts', 'Science']).isRequired,
    score: PropTypes.number,
    total: PropTypes.number
}

export default PercentageStat