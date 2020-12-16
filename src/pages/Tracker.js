import React from 'react';
import PostData from '../data.json';
function Tracker() {
    return (
        <div>
            <p>{PostData[2].projectId}</p>
            <p>{PostData[2].projectDescription}</p>
            <p>{PostData[2].projectName}</p>
            <p>{PostData[2].projectShortDescription}</p>
            <p>{PostData[2].projectTags + ''} </p>
        </div>
    );
}

export default Tracker;
