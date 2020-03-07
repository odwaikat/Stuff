import React from 'react'

const ProgressBar = ({activeStep, numberOfSteps}) => {
    return (
        <div className="progress-bar">
            {Array.apply(null, Array(numberOfSteps)).map((_el, idx) =>
                <div className={`circle-icon ${idx <= activeStep ? 'active' : ''}`} key={idx} />
            )}
        </div>
    )
}

ProgressBar.defaultProps = {
    activeStep: 0,
    numberOfSteps: 3
}

export default ProgressBar