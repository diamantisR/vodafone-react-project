import React from "react";

const ProgressBar = ({ value }) => {
    return (
        <div className="progress-bar-gr">
            <div className="current-progress-gr" style={{ width: `calc(${value}%)` }} />
        </div>
    );
}

export default ProgressBar;
